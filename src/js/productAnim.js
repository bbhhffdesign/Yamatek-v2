const productImage = document.getElementById("productImg")
const productName = document.getElementById("productName")
const producDescript_1 = document.getElementById("productDescript-1")
const productDescript_2 = document.getElementById("productDecript-2")
const backButton = document.querySelector(".imgdisplay__back");
const nextButton = document.querySelector(".imgdisplay__next");

const productImgs = [
    "src/assets/img/componentesHardware/gtx1080.png",
    "src/assets/img/componentesHardware/gtx1650.png",
    "src/assets/img/componentesHardware/intelI9.png"
]

let currentIndex = 0; 

function updateImage(index) {
    productImage.src = productImgs[index];
}

nextButton.addEventListener("click", () => {
    if (currentIndex < productImgs.length - 1) {
        
        gsap.to(productImage,{ 
            x: "-100%",
            duration: .5,
            onComplete: () =>{
                currentIndex++;
                updateImage(currentIndex);

                gsap.fromTo(productImage,{
                    x: "100%",
                    duration :.5
                },{
                    x: "0%",
                    duration: .5
                })
            }            
        })


    }
});

backButton.addEventListener("click", () => {
    if (currentIndex > 0) {

        gsap.to(productImage,{
            x: "100%",
            duration: .5,
            onComplete: () => {
                currentIndex--;
                updateImage(currentIndex);

                gsap.fromTo(productImage,{
                    x: "-100%",
                    duration :.5
                },{
                    x: "0%",
                    duration: .5
                })
            }
        })

    }
});




