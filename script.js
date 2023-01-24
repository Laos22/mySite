function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('anim_active');
        } else {
            change.target.classList.remove('anim_active');
        }
    });
}
let options = {
    threshold: [0.7] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".anim_f");
for (let elm of elements) {
    observer.observe(elm);
}