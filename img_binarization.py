# import base64  
  
# def base64_encode(image_path):  
#     with open(image_path, "rb") as image_file:  
#         return base64.b64encode(image_file.read()).decode('utf-8')  
  
# base64_image = base64_encode('./public/ganesha in gold.png')  
# print(base64_image)  


from PIL import Image  
import base64  
import io  
  
def resize_image(image_path, output_size=(300, 300)):  
    with Image.open(image_path) as img:  
        img = img.resize(output_size)  
        buffered = io.BytesIO()  
        img.save(buffered, format="PNG")  
        return buffered.getvalue()  
  
def base64_encode(image_bytes):  
    return base64.b64encode(image_bytes).decode('utf-8')  
  
# Replace 'path/to/your/image.png' with the actual path to your image file  
image_path = './public/ganesha in gold.png'
resized_image_bytes = resize_image(image_path)  
base64_image = base64_encode(resized_image_bytes)  
  
open("./ganesha_binary.txt", "w").write(base64_image)