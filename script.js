function toggleMediaFireInstructions() {
    var instructions = document.getElementById('mediaFireInstructions');
    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}

function toggleProceduraInstall() {
    var instructions = document.getElementById('installazioneinstruction');
    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}
