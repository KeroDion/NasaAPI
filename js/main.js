//https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('iframe').src = ''
document.querySelector('img').src = ''

function getFetch(){
  const choice = document.querySelector('input').value
  
console.log(choice)
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=SqCXshNcfmWjiGSx8jjaVovHxCPkoi2uiW7me2wd&date=${choice}`
 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h4').innerHTML = data.explanation
        document.querySelector('h3').innerHTML = data.title
        
        if(data.media_type === 'video'){
            //src is the url, the youtube video for example
            //feb 3rd 2021 is a yt video
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src = ''
            
        }else if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').src = ''
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}