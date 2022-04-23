# Pop!_OS Clock Alignment

![alt text](pop-clock-alignment-panelOnly.png)

Fork of [Pop COSMIC](https://github.com/pop-os/cosmic) that only uses the clock option.

Move Gnome-Panel Clock to ```left```, ```center``` and ```right``` side of the panel. The difference between [Flippery Move Clock](https://extensions.gnome.org/extension/2/move-clock/) and [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/) is that this extension moves the clock behind the ```system tray```.

## Requirements
[Pop!_OS](https://pop.system76.com/)


## Installation
* ### From Source

    ```
    git clone https://github.com/ManeLippert/pop-clock-alignment.git
    cd pop-clock-alignment
    sudo make && sudo make install
    killall -3 gnome-shell
    ```

    The ```sudo``` command is needed to save the extension in ```/usr/share/gnome-shell/extensions/```. The extension is required to bei installed in ```/usr/share/gnome-shell/extensions/``` to ensure that the settings of the extension does not get overwritten by other extensions.
* ### From Release
    Download release-file, unzip it and move it to ```/usr/share/gnome-shell/extensions/```


    After that reboot your PC or hit **'Alt+Fn+F2'** and type **'r'** or type in the terminal ```killall -3 gnome-shell```

## Removal

```
sudo rm -r /usr/share/gnome-shell/extensions/pop-clock-alignment@ManeLippert
```

## License
COSMIC is available under the terms of the GNU General Public License Version 3. For full license terms, see [LICENSE](./LICENSE).
