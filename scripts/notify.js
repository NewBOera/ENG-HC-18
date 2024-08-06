class Notify {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'notify';
        document.body.appendChild(this.container);
    }
  
    showNotification(message, type = 'info', duration = 3000) {
        let notificationIcon = '';
        switch (type) {
            case 'warning':
                notificationIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMSAyMUwxMiAybDExIDE5em0xMS0zcS40MjUgMCAuNzEzLS4yODhUMTMgMTd0LS4yODgtLjcxMlQxMiAxNnQtLjcxMi4yODhUMTEgMTd0LjI4OC43MTNUMTIgMThtLTEtM2gydi01aC0yeiIvPjwvc3ZnPg==';
                break;
            case 'success':
                notificationIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJtMTAuNiAxNi42bDcuMDUtNy4wNWwtMS40LTEuNGwtNS42NSA1LjY1bC0yLjg1LTIuODVsLTEuNCAxLjR6TTEyIDIycS0yLjA3NSAwLTMuOS0uNzg4dC0zLjE3NS0yLjEzN1QyLjc4OCAxNS45VDIgMTJ0Ljc4OC0zLjl0Mi4xMzctMy4xNzVUOC4xIDIuNzg4VDEyIDJ0My45Ljc4OHQzLjE3NSAyLjEzN1QyMS4yMTMgOC4xVDIyIDEydC0uNzg4IDMuOXQtMi4xMzcgMy4xNzV0LTMuMTc1IDIuMTM4VDEyIDIyIi8+PC9zdmc+';
                break;
            case 'error':
                notificationIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMTdxLjQyNSAwIC43MTMtLjI4OFQxMyAxNnQtLjI4OC0uNzEyVDEyIDE1dC0uNzEyLjI4OFQxMSAxNnQuMjg4LjcxM1QxMiAxN20tMS00aDJWN2gtMnptMSA5cS0yLjA3NSAwLTMuOS0uNzg4dC0zLjE3NS0yLjEzN1QyLjc4OCAxNS45VDIgMTJ0Ljc4OC0zLjl0Mi4xMzctMy4xNzVUOC4xIDIuNzg4VDEyIDJ0My45Ljc4OHQzLjE3NSAyLjEzN1QyMS4yMTMgOC4xVDIyIDEydC0uNzg4IDMuOXQtMi4xMzcgMy4xNzV0LTMuMTc1IDIuMTM4VDEyIDIyIi8+PC9zdmc+';
                break;
            case 'info':
                notificationIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTEgMTdoMnYtNmgtMnptMS04cS40MjUgMCAuNzEzLS4yODhUMTMgOHQtLjI4OC0uNzEyVDEyIDd0LS43MTIuMjg4VDExIDh0LjI4OC43MTNUMTIgOW0wIDEzcS0yLjA3NSAwLTMuOS0uNzg4dC0zLjE3NS0yLjEzN1QyLjc4OCAxNS45VDIgMTJ0Ljc4OC0zLjl0Mi4xMzctMy4xNzVUOC4xIDIuNzg4VDEyIDJ0My45Ljc4OHQzLjE3NSAyLjEzN1QyMS4yMTMgOC4xVDIyIDEydC0uNzg4IDMuOXQtMi4xMzcgMy4xNzV0LTMuMTc1IDIuMTM4VDEyIDIyIi8+PC9zdmc+';
                break;
            default:
                notificationIcon = '';
        }
  
        const notification = document.createElement('div');
        notification.className = `notify ${type}`;
        notification.innerHTML = `
            <div class="flex items-center gap-4 w-[245px]">
                <img class="w-5 h-5" src="${notificationIcon}" alt="">
                <span>${message}</span>
            </div>
        `;
  
        this.container.appendChild(notification);
  
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, duration);
    }
  
    success(message, duration) {
        this.showNotification(message, 'success', duration);
    }
  
    error(message, duration) {
        this.showNotification(message, 'error', duration);
    }
  
    warning(message, duration) {
        this.showNotification(message, 'warning', duration);
    }
  
    info(message, duration) {
        this.showNotification(message, 'info', duration);
    }
  }
  
  const notify = new Notify();