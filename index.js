function changImage(){
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('images/rest1.png')){
        displayImage.src = 'images/rest2.png'
    }else {
        displayImage.src = 'images/rest1.png'
    }
}

function changColmar(){
    let displayImage = document.getElementById('image2')
    if(displayImage.src.match('images/colmar1.png')){
        displayImage.src = 'images/colmar2.png'
    }else {
        displayImage.src = 'images/colmar1.png'
    }
}

function TeaCozy(){
    let displayImage = document.getElementById('image3')
    if(displayImage.src.match('images/teacozy1.png')){
        displayImage.src = 'images/teacozy2.png'
    }else {
        displayImage.src = 'images/teacozy1.png'
    }
}

function changDasmotos(){
    let displayImage = document.getElementById('image4')
    if(displayImage.src.match('images/das1.png')){
        displayImage.src = 'images/das2.png'
    }else {
        displayImage.src = 'images/das1.png'
    }
}