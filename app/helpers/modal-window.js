import Ember from 'ember';

export function modalWindow(name) {
  $(document).ready(() => {
    const normalizeName = name.pop();
    let dialog;
    let personaLink;

    switch (normalizeName) {
      case 'monkey':
        dialog = document.querySelector('.monkey_dialog');
        personaLink = document.querySelector('#monkey_dialog');
        break;
      case 'ghost':
        dialog = document.querySelector('.ghost_dialog');
        personaLink = document.querySelector('#ghost_dialog');
        break;
      case 'omega':
        dialog = document.querySelector('.omega_dialog');
        personaLink = document.querySelector('#omega_dialog');
        break;
      case 'rice':
        dialog = document.querySelector('.rice_dialog');
        personaLink = document.querySelector('#rice_dialog');
        break;
      case 'teal':
        dialog = document.querySelector('.teal_dialog');
        personaLink = document.querySelector('#teal_dialog');
        break;
      case 'sudo':
        dialog = document.querySelector('.sudo_dialog');
        personaLink = document.querySelector('#sudo_dialog');
        break;
      default:
        return;
    }
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    personaLink.addEventListener('click', () => dialog.showModal());

    dialog.querySelector('.close').addEventListener('click', () => {
      dialog.close();
    });
  });
}

export default Ember.Helper.helper(modalWindow);
