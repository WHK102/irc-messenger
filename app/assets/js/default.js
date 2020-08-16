// The Core
var app = {

    // Vars
    ui       : require('nw.gui'),
    fs       : require('fs'),
    window   : null,
    settings : null,
    
    exit : function(){
        this.ui.App.quit();
        process.kill();
    },

    init : function(){
        app.initializeWindow();

        // At ready the DOM
        $(document).ready(function(){
            app.handleView();
            app.loadSettings(function(){
                app.refreshContactList();
            });
        });
    },

    loadSettings: function(onReady){
        app.fs.readFile('./settings.json', function(err, data){
            app.settings = JSON.parse(data);
            if(typeof(onReady) == 'function'){
                onReady();
            }
        });
    },

    saveSettings: function(onReady){

    },

    initializeWindow: function(){

        // Initializer of screen properties
        this.ui.Screen.Init();

        // Without maximize
        this.window = this.ui.Window.get();
        this.window.isMaximized = false;

        // To right of screen
        this.window.x = this.ui.Screen.screens[0].bounds.width - this.window.width - 50;

        // Vertical centred
        this.window.y = (this.ui.Screen.screens[0].bounds.height / 2) - (this.window.height / 2);
    },

    handleView: function(){

        // Window control: minimize
        $('[data-action="minimize"]').click(function(){
            app.window.minimize();
        });

        // Window control: maximize
        $('[data-action="maximize"]').click(function(){
            if(app.window.isMaximized){
                app.window.unmaximize();
                app.window.isMaximized = false;
            }else{
                app.window.maximize();
                app.window.isMaximized = true;
            }
        });

        // Window control: close
        $('[data-action="close"]').click(function(){
            app.window.close();
        });

        // Top menu (hide/display)
        $('.header .menu > ul > li').click(function(){
            $('.header .menu .active').removeClass('active');
            
            // Active
            $(this).addClass('active');
            
        });

        $('.header .menu > ul > li').mouseenter(function(){
            if($('.header .menu .active').length && (!$(this).hasClass('.active'))){
                $(this).click();
            }
        });

        // Deactive all
        $('.content, .header .controls').click(function(){
            
            // Menu
            $('.header .menu .active').removeClass('active');
        });

        // Contacts

        $('.content .contacts .list .controls button[data-tab]').click(function(){
            $('.content .contacts .list .controls button').removeClass('active');
            $(this).addClass('active');

            $('.content .contacts .list > div[data-tab]').hide();
            $('.content .contacts .list > div[data-tab="' + $(this).attr('data-tab') + '"]').show();
        });
    },

    refreshContactList: function(){

        $('.contacts .list').hide();
        $('.contacts .loading').show();

        // Load contact list
        if(Object.keys(app.settings.contacts).length === 0){
            
        }

        $('.contacts .loading').hide();
        $('.contacts .list').show();
    }
}

app.init();