webcam.set({
    image_format: "png",
    png_quality: 90,
    height: 300,
    width:310,
    constraints:{
        facingMode:"environment"
    }
});
webcam.attach("#camera");