const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const extension = ExtensionUtils.getCurrentExtension();

const CLOCK_CENTER = 0;
const CLOCK_LEFT = 1;
const CLOCK_RIGHT = 2;

let indicatorPad = null;

function init() {
}

function clock_alignment(alignment) {

    // Clock Alignment breaks Date Menu, when other extensions like Dash2Panel are used
    let dash2Panel = Main.extensionManager.lookup("dash-to-panel@jderose9.github.com");
    if(dash2Panel && dash2Panel.state == ExtensionUtils.ExtensionState.ENABLED){
        return;
    }

    if (Main.layoutManager.monitors.length == 0) {
        return;
    }

    const dateMenu = Main.panel.statusArea['dateMenu'];
    const container = dateMenu.container;
    const parent = container.get_parent();
    if (parent != null) {
        parent.remove_child (container);
    }

    const banner_width = Main.panel.statusArea.dateMenu._messageList.width;
    const banner_offset = Main.layoutManager.monitors[0].width - banner_width;
    let clock_padding = false;
    Main.messageTray._bannerBin.width = banner_width;
    if (alignment == CLOCK_LEFT) {
        Main.panel._leftBox.insert_child_at_index(container, 0);
        Main.messageTray._bannerBin.x = -banner_offset;
    } else if (alignment == CLOCK_RIGHT) {
        Main.panel._rightBox.add_actor(container);
        Main.messageTray._bannerBin.x = banner_offset;
    } else {
        Main.panel._centerBox.add_actor(container);
        Main.messageTray._bannerBin.x = 0;
        clock_padding = true;
    }

    const dateMenuBox = dateMenu.get_child_at_index(0);
    if (indicatorPad == null) {
        indicatorPad = dateMenuBox.get_child_at_index(0);
    }
    if (clock_padding) {
        if (indicatorPad.get_parent() == null) {
            dateMenuBox.insert_child_at_index(indicatorPad, 0);
        }
    } else {
        if (indicatorPad.get_parent() != null) {
            dateMenuBox.remove_child(indicatorPad);
        }
    }
}


function enable() {

    settings = ExtensionUtils.getSettings((extension.metadata["settings-schema"]));

    settings.connect("changed::clock-alignment", () => {
        clock_alignment(settings.get_enum("clock-alignment"));
    });
    
}

function disable() {
    
    clock_alignment(CLOCK_CENTER);
    
}