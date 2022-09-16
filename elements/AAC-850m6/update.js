function(instance, properties, context) {

    const setupStuff = function() {
        let el = document.getElementById(properties.element_id);
        if(!el) return;
        
        // ---- if the element is finally there
        
        clearInterval(setupInterval);
        el.onmouseout = function(event) {
            instance.triggerEvent("on_mouse_out");
        };

        el.onmouseover = function(event) {
            instance.triggerEvent("on_mouse_over");
        };
    }
    const setupInterval = setInterval(setupStuff, 1000);

}