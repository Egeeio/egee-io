import Ember from 'ember';

export function modalWindow(name) {
  $(document).ready(() => {
    const normalizeName = name.pop();
    let dialog;
    let showDialogButton;

    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
    switch (normalizeName) {
      case 'egee':
        dialog = document.querySelector('.egee_dialog');
        showDialogButton = document.querySelector('#egee_dialog');
        break;
      case 'monkey':
        dialog = document.querySelector('.monkey_dialog');
        showDialogButton = document.querySelector('#monkey_dialog');
        break;
      case 'ghost':
        dialog = document.querySelector('.ghost_dialog');
        showDialogButton = document.querySelector('#ghost_dialog');
        break;
      case 'omega':
        dialog = document.querySelector('.omega_dialog');
        showDialogButton = document.querySelector('#omega_dialog');
        break;
      case 'rice':
        dialog = document.querySelector('.rice_dialog');
        showDialogButton = document.querySelector('#rice_dialog');
        break;
      case 'teal':
        dialog = document.querySelector('.teal_dialog');
        showDialogButton = document.querySelector('#teal_dialog');
        break;
      case 'sudo':
        dialog = document.querySelector('.sudo_dialog');
        showDialogButton = document.querySelector('#sudo_dialog');
        break;
      default:
        return;
    }
    showDialogButton.addEventListener('click', () => dialog.showModal());
  });
}

export default Ember.Helper.helper(modalWindow);
