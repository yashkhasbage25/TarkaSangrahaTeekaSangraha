import json
import os
import os.path as osp

# input_path = "./nyayabodhini_mapping.json"
input_path = "tarkasangraha.json"
assert osp.exists(input_path), f"File {input_path} does not exist."
data = json.load(open(input_path, 'r', encoding='utf-8'))

for d in data:
    content = d['content']
    # content = content.replace("||", '॥').replace("|", "।").replace("।।", "॥")
    content = content.replace(" ॥", "॥")
    d['content'] = content

with open(input_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)