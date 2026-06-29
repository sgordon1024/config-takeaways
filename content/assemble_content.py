#!/usr/bin/env python3
"""Assemble src/data/content.json from the verified per-talk summaries and (optionally)
the Step 2 synthesis result. Run with no args to (re)build talks+stats with whatever
synthesis file exists. Pass the synthesis JSON path to inject themes/deep-dives.

  python3 content/assemble_content.py [path/to/synthesis.json]
"""
import json, os, glob, sys, re

def CLEANWS(x):
    if not isinstance(x,str): return x
    x=re.sub(r'[\u2028\u2029\s]+',' ',x)
    x=re.sub(r'\s+([,;:])', r'\1', x)  # space-before-comma
    return x.strip()

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

talks = []
for f in sorted(glob.glob('content/summaries/*.json')):
    talks.append(json.load(open(f)))

# ---- stats (computed from real files, never estimated) ----
def split_speakers(s):
    if not s or s == 'Unattributed':
        return []
    # "Name (Role, Co), Name (Role)" -> names only
    names = []
    for chunk in re.split(r',\s*(?![^(]*\))', s):
        name = re.sub(r'\s*\(.*?\)\s*', '', chunk).strip()
        if name:
            names.append(name)
    return names

speakers = set()
stages = set()
for t in talks:
    for n in split_speakers(t.get('speakers', '')):
        speakers.add(n)
    if t.get('stage'):
        stages.add(t['stage'].strip())

n_transcript = sum(1 for t in talks if t['source'] == 'transcript')
n_abstract = sum(1 for t in talks if t['source'] == 'abstract')

# ---- synthesis (themes + deep dives) ----
syn = {}
syn_path = sys.argv[1] if len(sys.argv) > 1 else 'content/synthesis.json'
if os.path.exists(syn_path):
    syn = json.load(open(syn_path))

themes = []
for i, th in enumerate(syn.get('themes', []), 1):
    ids = [x for x in th.get('talk_ids', []) if any(t['id'] == x for t in talks)]
    themes.append({
        'id': i,
        'headline': CLEANWS(th['headline']),
        'explanation': th['explanation'].strip(),
        'talkIds': ids,
        'talkCount': len(ids),
    })

deep_ids = [d['id'] for d in syn.get('deep_dives', [])]
deep_set = set(deep_ids)
for t in talks:
    t['deepDive'] = t['id'] in deep_set

# camelCase the talk fields for the app
app_talks = [{
    'id': t['id'], 'title': CLEANWS(t['title']), 'speakers': CLEANWS(t['speakers']), 'stage': t['stage'],
    'source': t['source'], 'video': t.get('video'),
    'keyPoints': t.get('key_points', []), 'quotes': t.get('quotes', []),
    'deepDive': t.get('deepDive', False),
} for t in talks]

content = {
    'meta': {
        'conference': 'Config 2026',
        'host': 'Figma',
        'location': 'San Francisco, CA',
        'dates': 'June 23–25, 2026',
        'curator': 'Steve Gordon',
        'tagline': syn.get('meta_narrative', '').strip(),
        'overview': syn.get('overview', '').strip(),
        'stats': {
            'totalTalks': len(talks),
            'transcribedTalks': n_transcript,
            'abstractTalks': n_abstract,
            'themes': len(themes),
            'speakers': len(speakers),
            'stages': len(stages),
        },
    },
    'themes': themes,
    'deepDives': deep_ids,
    'talks': app_talks,
}

os.makedirs('src/data', exist_ok=True)
json.dump(content, open('src/data/content.json', 'w'), indent=1, ensure_ascii=False)
print(f"content.json: {len(app_talks)} talks, {len(themes)} themes, {len(deep_ids)} deep dives")
print(f"stats: total={len(talks)} transcript={n_transcript} abstract={n_abstract} "
      f"speakers={len(speakers)} stages={len(stages)}")
