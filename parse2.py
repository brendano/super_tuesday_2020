import json
data = json.load(open("data1.json"))

allcands = "biden sanders warren bloomberg".split()
print(",".join(['attrib','value','state','share'] + allcands))

for attribdata in data:
    key = attribdata['key']
    if key=='XAGE': continue
    for valdata in attribdata['groups']:
        value = valdata['key']
        if (key,value)==('RACE','Other'): continue
        for stdata in valdata['states']:
            # print(stdata)
            st = stdata['stusps']
            cand2pct = {x['cand']:x['hPct'] for x in stdata['candidates']}
            out = [key,value,st, stdata['share']] + [cand2pct.get(cand,"") for cand in allcands]
            print(",".join([str(x) for x in out]))



