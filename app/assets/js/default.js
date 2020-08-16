// The Core
var app = {

    // Vars
    ui     : require('nw.gui'),
    window : false,
    
    exit : function(){
        this.ui.App.quit();
        process.kill();
    },
    
    init : function(){

        // Initializer of screen properties
        this.ui.Screen.Init();

        // Without maximize
        this.window = this.ui.Window.get();
        this.window.isMaximized = false;

        // To right of screen
        this.window.x = this.ui.Screen.screens[0].bounds.width - this.window.width - 50;

        // Vertical centred
        this.window.y = (this.ui.Screen.screens[0].bounds.height / 2) - (this.window.height / 2);

        // Handlers

        // Window control: minimize
        $('#header-control-min').click(function(){
            app.window.minimize();
        });

        // Window control: maximize
        $('#header-control-max').click(function(){
            if(app.window.isMaximized){
                app.window.unmaximize();
                app.window.isMaximized = false;
            }else{
                app.window.maximize();
                app.window.isMaximized = true;
            }
        });

        // Window control: close
        $('#header-control-exit').click(function(){
            app.window.close();
        });

        // Top menu (hide/display)
        $('#header-menu > ul > li').click(function(){
            if($(this).hasClass('header-menu-active')){
                // Remove for all
                $('.header-menu-active').removeClass('header-menu-active');
            }else{
                // Remove for all
                $('.header-menu-active').removeClass('header-menu-active');

                // Active
                $(this).addClass('header-menu-active');
            }
        });

        $('#header-menu > ul > li').mouseenter(function(){
            if($('.header-menu-active').length && (!$(this).hasClass('header-menu-active'))){
                $(this).click();
            }
        });

        $('#content, #header-controls').click(function(){
            $('.header-menu-active').removeClass('header-menu-active');
        });

        $('#form-login-btn').click(function(){
            // TODO: Disable controls ...
            // TODO: Show loader (bottom to button)
        });
    },
}

// At ready the DOM
$(document).ready(function(){
    app.init();
});
