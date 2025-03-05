base_html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <title>तर्कसङ्ग्रहः</title>
    <meta charset="utf-8">
    <!-- Meta -->
    <meta name="keywords" content="tarka sangraha, nyaya, vaisheshika, deepika, nyayabodhini, padakrtyam, kiranavali, nilakanthi" />
    <meta name="author" content="Yash Khasbage">
    <meta name="robots" content="" />
    <meta name="description" content="Several Teekas of Tarkasangraha">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css" type="text/css" />
    <script rel="text/javascript" src="js/main.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Halant:wght@300;400;500;600;700&family=Laila:wght@300;400;500;600;700&family=Martel:wght@200;300;400;600;700;800;900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Yatra+One&display=swap');
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <a class="navbar-brand" href="/{repo_name}/index.html">तर्कसङ्ग्रहटीकासङ्ग्रहः</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="pratyaksha-nav-dropdown" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">प्रत्यक्षपरिच्छेदः</a>
                    <div class="dropdown-menu" aria-labelledby="pratyaksha-nav-dropdown">
                        <a class="dropdown-item" href="/{repo_name}/pratyaksha.html#section-मङ्गलम्">मङ्गलम्</a>
                        <a class="dropdown-item" href="#section-मङ्गलवादः">मङ्गलवादः</a>
                        <a class="dropdown-item" href="#section-सप्तपदार्थाः">सप्तपदार्थाः</a>
                        <a class="dropdown-item" href="#section-द्रव्याणि">प्रत्यक्षविभागः</a>
                        <a class="dropdown-item" href="#section-गुणाः">गुणाः</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="anumana-nav-dropdown" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">अनुमानपरिच्छेदः</a>
                    <div class="dropdown-menu" aria-labelledby="anumana-nav-dropdown">
                        <a class="dropdown-item" href="#">मुखम्</a>
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="upamana-nav-dropdown" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">उपमानपरिच्छेदः</a>
                    <div class="dropdown-menu" aria-labelledby="upamana-nav-dropdown">
                        <a class="dropdown-item" href="#">मुखम्</a>
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="shabda-nav-dropdown" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">शब्दपरिच्छेदः</a>
                    <div class="dropdown-menu" aria-labelledby="shabda-nav-dropdown">
                        <a class="dropdown-item" href="#">मुखम्</a>
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="teeka-nav-dropdown" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">टीकाचयनम्</a>
                    <div class="dropdown-menu" aria-labelledby="pratyaksha-nav-dropdown">
                        <div class="dropdown-item">
                            <input class="form-check-input" type="checkbox" value="" id="padakrtyam-checkbox" checked>
                            <label class="form-check-label">पदकृत्यम्</label>
                        </div>
                        <div class="dropdown-item">
                            <input class="form-check-input" type="checkbox" value="" id="nyayabodhini-checkbox" checked>
                            <label class="form-check-label">न्यायबोधिनी</label>
                        </div>
                        <div class="dropdown-item">
                            <input class="form-check-input" type="checkbox" value="" id="deepika-checkbox" checked>
                            <label class="form-check-label">दीपिका</label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    
    <!-- Main content -->
    <div class="main-content  mt-5 pt-3">
        {content}
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>  
        document.getElementById('deepika-checkbox').addEventListener('change', function() {{  
            var elements = document.querySelectorAll('.teeka-deepika');  
            elements.forEach(function(element) {{  
                if (this.checked) {{ 
                element.classList.remove('hidden');  
                }} else {{  
                element.classList.add('hidden');  
                }}  
            }}, this);  
        }});  
        document.getElementById('nyayabodhini-checkbox').addEventListener('change', function() {{  
            var elements = document.querySelectorAll('.teeka-nyayabodhini');  
            elements.forEach(function(element) {{  
                if (this.checked) {{  
                element.classList.remove('hidden');  
                }} else {{  
                element.classList.add('hidden');  
                }}  
            }}, this);  
        }});  
        document.getElementById('padakrtyam-checkbox').addEventListener('change', function() {{  
            var elements = document.querySelectorAll('.teeka-padakrtyam');  
            elements.forEach(function(element) {{  
                if (this.checked) {{  
                element.classList.remove('hidden');  
                }} else {{  
                element.classList.add('hidden');  
                }}  
            }}, this);  
        }});  
    </script>  
</body>
</html>

"""
# TarkaSangrahaTeekaSangraha
# docs
repo_name = "TarkaSangrahaTeekaSangraha" # FIXME

from bs4 import BeautifulSoup
import re
roman2dev = {
    "moolam": "मूलम्",
    "padakrtyam": "पदकृत्यम्",
    "deepika": "दीपिका",
    "nyayabodhini": "न्यायबोधिनी"
}

# content for index.html 
index_content = """
<center>
<div class="yatra-one-regular fancy-heading">
        ॥ श्रीसिद्धिबुद्धिसहित-श्रीमद्गणाधिपतये नमः ॥
    <br>
        Tarka Sangraha <br>
        Sharing the text as I learn it.
    <br>
</div>
<img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ganesha_on_Gopuram_in_the_Meenakshi_Temple_at_Madurai.jpg" 
    class="fancy-image-border"
    />
</center>
"""

index_html = base_html.format(content=index_content, repo_name=repo_name)



def format_html(html_string):
    soup = BeautifulSoup(html_string, 'html.parser')
    formatted_html = soup.prettify()
    return formatted_html

def format_shloka(shloka):
    """
    Formats a shloka to be displayed on a webpage
    """
    lines = shloka.split('\n')
    formatted = '<div class="shloka laila-regular">'
    for line in lines:
        space_danda = r'(?<!\s)।(?!\s)'
        space_double_danda = r'(?<!\s)॥(?!\s)'
        line = re.sub(space_danda, ' ।', line)
        line = re.sub(space_double_danda, ' ॥', line)
        formatted += f'<p>{line}</p>'
    formatted += '</div>'
    return formatted

def pariccheda_to_html(root):
    """
    HTML converter for pariccheda XML files
    """
    html = '<div class="container">'
    section_tags = []
    for child in root:
        if child.tag == 'head':
            html += f'<h1 class="text-center halant-bold">{child.text}</h1>'
        elif child.tag == 'body':
            for subchild in child:
                className = "section teeka-" + subchild.tag
                idName = "section-" + subchild.get('section', '')
                html += f'<div class="{className}" id="{idName}">'
                if subchild.get('section', '') != '':
                    section_tags.append(subchild.get('section'))
                if subchild.tag in ['moolam', 'padakrtyam', 'deepika', 'nyayabodhini']:
                    html += f'<h4 class="martel-bold book-name">{roman2dev[subchild.tag]}</h4>'
                    if subchild.get('section', '') != '':
                        html += f"<div id='section-{subchild.get('section')}'></div>"
                    for subsubchild in subchild:
                        if subsubchild.tag == 'text':
                            html += f'<p class="noto-sans-light commentary">{subsubchild.text}</p>'
                        elif subsubchild.tag == 'verse':
                            html += format_shloka(subsubchild.text)
                        else:
                            html += f'<h4>{subsubchild.tag}</h4>'
                            html += f'<p>{subsubchild.text}</p>'
                else:
                    html += f'<h2>{subchild.tag}</h2>'
                    html += f'<p>{subchild.text}</p>'
                html += '</div>'
    
    html += '</div>'
    html = base_html.format(content=html, repo_name=repo_name)
    html = format_html(html)
    return html