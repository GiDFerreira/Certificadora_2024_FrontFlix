document.addEventListener('DOMContentLoaded', function(){

    const button = document.getElementById('downloadCV');
    button.addEventListener('click', function(){
        const link = document.createElement('a');
        link.href = 'assets/curriculo.pdf';
        link.download = 'curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
})
