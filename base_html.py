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

</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #90EE90;">
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
                        <a class="dropdown-item" href="/{repo_name}/pratyaksha.html">मुखम्</a>
                        <a class="dropdown-item" href="#">मङ्गलम्</a>
                        <a class="dropdown-item" href="#">मङ्गलवादः</a>
                        <a class="dropdown-item" href="#">सप्तपदार्थाः</a>
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
            </ul>
        </div>
    </nav>
    
    <!-- Main content -->
    <div class="main-content bg-dark">
        {content}
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

"""
repo_name = "TarkaSangrahaTeekaSangraha"

from bs4 import BeautifulSoup
roman2dev = {
    "moolam": "मूलम्",
    "padakrtyam": "पदकृत्यम्",
    "deepika": "दीपिका"
}

# content for index.html 
index_content = """
<center>
        ॥ श्रीसिद्धिबुद्धिसहितश्रीमद्गणाधिपतये नमः ॥
<br>
Tarka Sangraha - Sharing the text as I learn it.
<br>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ganesha_on_Gopuram_in_the_Meenakshi_Temple_at_Madurai.jpg" width="580" height="380"/>
</center>
"""

index_html = base_html.format(content=index_content)



def format_html(html_string):
    soup = BeautifulSoup(html_string, 'html.parser')
    formatted_html = soup.prettify()
    return formatted_html

def format_shloka(shloka):
    """
    Formats a shloka to be displayed on a webpage
    """
    lines = shloka.split('\n')
    formatted = '<div class="shloka">'
    for line in lines:
        formatted += f'<p>{line}</p>'
    formatted += '</div>'
    return formatted

def pariccheda_to_html(root):
    """
    HTML converter for pariccheda XML files
    """
    html = '<div class="container bg-dark">'
    
    for child in root:
        if child.tag == 'head':
            html += f'<h1 class="text-center">{child.text}</h1>'
        elif child.tag == 'body':
            for subchild in child:
                html += f'<div class="section bg-dark">'
                if subchild.tag == 'moolam' or subchild.tag == 'padakrtyam' or subchild.tag == 'deepika':
                    html += f'<h4>{roman2dev[subchild.tag]}</h4>'
                    for subsubchild in subchild:
                        if subsubchild.tag == 'text':
                            html += f'<p>{subsubchild.text}</p>'
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