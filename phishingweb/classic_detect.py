'''

#### PhURL - Web Based Phishing URL Detection & Learning Platform ####
#### Created By - Ruchira Edirisinghe ####
#### Plymouth Final Year Project - 2023 ####
#### Final Build - File 2 - Classic URL ####

'''

def check_phishing(url):
    # Check if url starts with http or https
    if url.startswith('http://'):
        return "This Link is Malware"
    
    # Check if url is only numbers and random letters
    if url.isalnum():
        return "This Link is Malware"
    
    return "This Link is Safe"

# Take user input
url = input("Enter URL: ")

# Get result
result = check_phishing(url)

# Print result
print(result)