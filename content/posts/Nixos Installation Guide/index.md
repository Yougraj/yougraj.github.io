---
title: "Nixos Installation Guide"
date: 2023-06-23
tags: ["Nixos", "NixOs Installation"]
---
# What is NixOs 
NixOS is a Linux distribution renowned for its unique approach to package management and system configuration. It employs a purely functional package management system that ensures reproducibility and eliminates version conflicts. System configuration is achieved through declarative means, where the desired state of the system is described in a configuration file using the functional programming language Nix. This enables atomic upgrades and rollbacks of the entire system configuration. With NixOS, users gain a highly reliable and customizable Linux distribution that provides a consistent and reproducible environment.

## Here's a step-by-step guide to installing NixOS:

1. **Download the NixOS Installation ISO**: Visit the official NixOS website (https://nixos.org) and navigate to the "Download" section. Choose the appropriate ISO file for your system architecture and download it.

2. **Create a Bootable USB Drive**: Use a tool like Rufus (for Windows) or Etcher (for macOS and Linux) to create a bootable USB drive from the downloaded ISO file. This USB drive will be used to install NixOS.

3. **Boot from the USB Drive**: Insert the bootable USB drive into your computer and restart it. Access the BIOS or UEFI settings and configure your system to boot from the USB drive. Save the changes and restart your computer again.

4. **Start the NixOS Installation**:
    * Enter into the root environment
        ```bash
        sudo su
        ```
    * Follow the flowchart given bellow for disk partitioning
        ```mermaid
                
        %%{
          init: {
            'theme': 'base',
            'themeVariables': {
              'primaryColor': '#C1BDDB',
              'primaryTextColor': '#000',
              'primaryBorderColor': '#35C4B6',
              'lineColor': '#58FCEC',
              'secondaryColor': '#006100',
              'tertiaryColor': '#fff'
            }
          }
        }%%
        flowchart LR
        A[cfdisk] --> B{select 'gpt' option}    
        B --> C("`select the free space`")    
        C --> D{"`make 3 partition

        .`"}
        D --> E("`make '600M' partion type 
        is 'EFI System'`")
        D --> root("`Give space as much as 
        you want storage for 
        making root directory 
        type would be 'linux file system'   .

        .`")
        D --> swap("`Last you have to give 
        all left space to swap partition 
        give double of you ram size

        .`")
        ```
    * Changing the file system 
        ```bash
        mkfs.fat -F 32 -n boot /dev/sda2 # EFI system
        mkfs.ext4 -L nixos /dev/sda1 #Root partion 
        mkswap -L swap /dev/sda3 #swap partition
        ```
        If you wana see you disk name `lablk`
    * Let's mount the system
        Mount the Root partion
        ```bash
        mount /dev/disk/by-label/nixos /mnt 
        ```
        Mount the UEFI system
        ```bash
        mkdir -p /mnt/boot
        mount /dev/disk/by-label/boot /mnt/boot
        ```
        Now on swap
        ```bash
        swapon /dev/sda3
        ```
    * Now you have to generate nixos config 
        ```bash
        nixos-generate-config --root /mnt
        ```
    * Your system is ready now just one thing to go
        ```bash
        nixos-install
        # then
        reboot
        ```

## Post-Installation Configuration 
Once you're logged into NixOS, you can further customize your system by modifying the NixOS configuration file (`/etc/nixos/configuration.nix`). Make any desired changes and run `sudo nixos-rebuild switch` to apply the new configuration.


That's it! You now have NixOS installed on your computer. Remember that NixOS has a unique approach to package management and system configuration, so it may take some time to familiarize yourself with its concepts and workflows. The NixOS [documentation](https://nixos.org/manual/nixos/stable) is an excellent resource for further exploration and understanding of the distribution.



