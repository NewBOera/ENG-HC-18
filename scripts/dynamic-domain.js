document.addEventListener("DOMContentLoaded", () => {
    function getSecondLevelDomain(hostname) {
        const domainParts = hostname.split('.');
        if (domainParts.length > 2) {
            return domainParts.slice(-2)
        }

        return domainParts;
    }

    function changeDynamicDomain(className, hostname, isDomain) {
        const domainParts = getSecondLevelDomain(hostname);
        const domain = domainParts.join('.');
        const name = domainParts[0]

        const spanDomain = document.querySelectorAll(className);
        spanDomain.forEach((element) => {
            (isDomain) ? element.textContent = domain : element.textContent = name;
        });
    }

    function addDynamicEmail(className, hostname) {
        const domainParts = getSecondLevelDomain(hostname);
        const domain = domainParts.join('.');
        const spanDomain = document.querySelectorAll(className);
        spanDomain.forEach((element) => {
            console.log(element);
            element.textContent = `info@${domain}`;
            element.href = `mailto:info@${domain}`;
        });
    }

    const hostname = window.location.hostname;
    changeDynamicDomain('.dyn-domain', hostname, true);
    changeDynamicDomain('.dyn-name', hostname, false);
    addDynamicEmail('.dyn-email', hostname, false);
});