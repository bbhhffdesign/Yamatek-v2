// Elementos DOM
var productImage = document.getElementById("productImg");
var productBg = document.getElementById("productBg");
var productName = document.getElementById("productName");
var productDescript_1 = document.getElementById("productDescript-1");
var productDescript_2 = document.getElementById("productDescript-2");
var backButton = document.querySelector(".imgdisplay__back");
var nextButton = document.querySelector(".imgdisplay__next");

// Arreglos de datos
var preloadedImages = [];

var productImgs = [
    "src/assets/img/componentesHardware/ajustadas/rtx1080-squared.png",
    "src/assets/img/componentesHardware/ajustadas/rtx1650-squared.png",
    "src/assets/img/componentesHardware/ajustadas/i9-squared.png"
];
var productNames = [
    "GeForce GTX 1080",
    "GeForce GTX 1650",
    "Intel i9"
];
var productDescripts_1 = [
    "Tarjeta gráfica de alto rendimiento de NVIDIA, diseñada para juegos y aplicaciones exigentes, con 8 GB de memoria GDDR5X y soporte para realidad virtual.",
    "GPU compacta y eficiente de NVIDIA, ideal para gaming en 1080p, con 4 GB de memoria GDDR5, enfocada en rendimiento y bajo consumo energético.",
    "Procesador de gama alta de Intel, con múltiples núcleos e hilos, diseñado para cargas de trabajo intensivas como edición de video, diseño 3D y gaming extremo."
];

// Precargar imágenes
function preloadImages() {
    for (var i = 0; i < productImgs.length; i++) {
        var img = new Image();
        img.src = productImgs[i];
        preloadedImages.push(img);
    }
}
preloadImages();

// Variables de control
var currentIndex = 0;

// Actualizar imagen y detalles
function updateImage(index) {
    productImage.src = productImgs[index];
    productBg.src = productImgs[index];
    productName.innerText = productNames[index];
    productDescript_1.innerText = productDescripts_1[index];
}

// Listener para botón "Back"
backButton.addEventListener("click", function(event) {
    event.preventDefault();

    var currentScroll = window.scrollY;

    gsap.to(productImage, {
        x: "200%",
        duration: 0.5,
        onComplete: function() {
            currentIndex = (currentIndex - 1 + productImgs.length) % productImgs.length;
            updateImage(currentIndex);
            gsap.fromTo(productImage, {
                x: "-100%"
            }, {
                x: "0%",
                duration: 0.5,
                onUpdate: function() {
                    window.scrollTo(0, currentScroll);
                }
            });
        }
    });
});

// Listener para botón "Next"
nextButton.addEventListener("click", function(event) {
    event.preventDefault();

    var currentScroll = window.scrollY;

    gsap.to(productImage, {
        x: "-200%",
        duration: 0.5,
        onComplete: function() {
            currentIndex = (currentIndex + 1) % productImgs.length;
            updateImage(currentIndex);
            gsap.fromTo(productImage, {
                x: "100%"
            }, {
                x: "0%",
                duration: 0.5,
                onUpdate: function() {
                    window.scrollTo(0, currentScroll);
                }
            });
        }
    });
});
