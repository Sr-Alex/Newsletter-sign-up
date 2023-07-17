const input = document.querySelector('#email-input');
const subsButton = document.querySelector('#subscribe-button');
const dismissButton = document.querySelector('#dismiss-button');

input.oninput = () => resetInput();
subsButton.onclick = () => subscribe();
dismissButton.onclick = () => window.location.reload();

function subscribe(){
    if (!checkInput()){
        return showError()
    }

    const emailText = document.querySelector('.subscribed .content p');
    emailText.textContent = `A confirmation email has been sent to ${input.value}. Please open it and click the button inside to confirm your subscription.`;

    showSuccessWindow();
}

function resetInput(){
    input.style.color = 'var(--Dark-Slate-Grey)';
}

function checkInput(){
    if (input.value.includes('@') && input.value.endsWith('.com')){
        return true;
    }

    return false;
}

function showError(){
    const label = document.querySelector('#error-message');

    label.style.display = 'inline-block';

    input.style.color = 'var(--Tomato)';
}

function showSuccessWindow(){
    const registerWindow = document.querySelector('.register');
    const successWindow = document.querySelector('.subscribed');

    registerWindow.style.display = 'none';
    successWindow.style.display = 'flex';

}