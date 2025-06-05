package com.adzel.velocitybroadcast;

import java.util.List;

import com.velocitypowered.api.command.CommandSource;
import com.velocitypowered.api.command.SimpleCommand;

import net.kyori.adventure.text.minimessage.MiniMessage;

public class PrefixCommand implements SimpleCommand {

    private final VelocityBroadcast plugin;

    public PrefixCommand(VelocityBroadcast plugin) {
        this.plugin = plugin;
    }

    @Override
    public void execute(Invocation invocation) {
        CommandSource source = invocation.source();
        List<String> args = List.of(invocation.arguments());

        if (!source.hasPermission("vb.admin")) {
            source.sendMessage(MiniMessage.miniMessage().deserialize("<red>You don't have permission to change the broadcast prefix.</red>"));
            return;
        }

        if (args.isEmpty()) {
            source.sendMessage(MiniMessage.miniMessage().deserialize("<red>Usage: /vb prefix <newPrefix></red>"));
            return;
        }

        String newPrefix = String.join(" ", args);
        plugin.getConfigHandler().setPrefix(newPrefix);

        source.sendMessage(MiniMessage.miniMessage().deserialize(
            "<green>Broadcast prefix updated to:</green> <gray>" + newPrefix + "</gray>"
        ));

        if (plugin.getConfigHandler().isDebugEnabled()) {
            plugin.getLogger().info("[Prefix] Updated prefix to: " + newPrefix);
        }
    }
}
