"""
Continuously runs a python module
"""
import time
import os.path as osp
import xml.etree.ElementTree as ET
import importlib

import base_html

file_maps = [
    (pariccheda, osp.join("sanitized", f"{pariccheda}.xml"), osp.join("public", f"{pariccheda}.html"))
        for pariccheda in ["pratyaksha", "anumana", "upamana", "shabda"]
]

while True:
    importlib.reload(base_html)
    with open(osp.join("public", "index.html"), 'w', encoding='utf-8') as f:
        f.write(base_html.index_html)
        print("Updated index.html")
    for pariccheda, xml_path, html_path in file_maps:
        importlib.reload(base_html)
        assert osp.exists(xml_path), f"File not found: {xml_path}"
        root = ET.parse(xml_path).getroot()
        
        html = base_html.pariccheda_to_html(root)
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Updated {html_path}")
        time.sleep(5)

