package com.adzel.velocitybroadcast;

import com.velocitypowered.api.command.CommandSource;
import com.velocitypowered.api.command.SimpleCommand;
import net.kyori.adventure.text.minimessage.MiniMessage;

import java.util.List;

public class ReloadCommand implements SimpleCommand {

    private final VelocityBroadcast plugin;

    public ReloadCommand(VelocityBroadcast plugin) {
        this.plugin = plugin;
    }

    @Override
    public void execute(Invocation invocation) {
        CommandSource source = invocation.source();

        if (!source.hasPermission("vb.admin")) {
            source.sendMessage(MiniMessage.miniMessage().deserialize("<red>You don't have permission to reload the config.</red>"));
            return;
        }

        plugin.getConfigHandler().reload();
        source.sendMessage(MiniMessage.miniMessage().deserialize("<green>VelocityBroadcast config reloaded.</green>"));

        if (plugin.getConfigHandler().isDebugEnabled()) {
            plugin.getLogger().info("[Reload] Config reloaded by " + source.toString());
        }
    }
}
