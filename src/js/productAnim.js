const productImage = document.getElementById("productImg")
const productName = document.getElementById("productName")
const productDescript_1 = document.getElementById("productDescript-1")
const productDescript_2 = document.getElementById("productDecript-2")
const backButton = document.querySelector(".imgdisplay__back");
const nextButton = document.querySelector(".imgdisplay__next");

const productImgs = [
    "src/assets/img/componentesHardware/gtx1080.png",
    "src/assets/img/componentesHardware/gtx1650.png",
    "src/assets/img/componentesHardware/intelI9.png"
]
const productNames = [
    "GeForce GTX 1080",
    "GeForce GTX 1650",
    "Intel i9"
]
const productDescripts_1 = [
    "Tarjeta gráfica de alto rendimiento de NVIDIA, diseñada para juegos y aplicaciones exigentes, con 8 GB de memoria GDDR5X y soporte para realidad virtual.",
    "GPU compacta y eficiente de NVIDIA, ideal para gaming en 1080p, con 4 GB de memoria GDDR5, enfocada en rendimiento y bajo consumo energético.",
    "Procesador de gama alta de Intel, con múltiples núcleos e hilos, diseñado para cargas de trabajo intensivas como edición de video, diseño 3D y gaming extremo."
]
// const productDescripts_2 = [
    
// ]
let currentIndex = 0; 

function updateImage(index) {
    productImage.src = productImgs[index];
    productName.innerText = productNames[index];
    productDescript_1.innerText = productDescripts_1[index];
    // productDescript_2.innerText = productDescripts_2[index];
}

nextButton.addEventListener("click", () => {
    // event.preventDefault();
    // event.stopPropagation();
    // window.scrollTo(0, 0);
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
    // event.preventDefault();
    // event.stopPropagation();
    // window.scrollTo(0, 0);
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




