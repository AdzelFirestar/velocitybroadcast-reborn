package com.adzel.velocitybroadcast;

import java.util.List;

import com.velocitypowered.api.command.CommandSource;
import com.velocitypowered.api.command.SimpleCommand;

import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.minimessage.MiniMessage;

public class BroadcastCommand implements SimpleCommand {

    private final VelocityBroadcast plugin;

    public BroadcastCommand(VelocityBroadcast plugin) {
        this.plugin = plugin;
    }

    @Override
    public void execute(Invocation invocation) {
        CommandSource source = invocation.source();
        List<String> args = List.of(invocation.arguments());

        if (!source.hasPermission("vb.broadcast")) {
            source.sendMessage(MiniMessage.miniMessage().deserialize("<red>You don't have permission to use this command.</red>"));
            return;
        }

        if (args.isEmpty()) {
            source.sendMessage(MiniMessage.miniMessage().deserialize("<red>Usage: /vb <message></red>"));
            return;
        }

        String messageRaw = String.join(" ", args);
        String prefix = plugin.getConfigHandler().getPrefix();
        String fullMessage = prefix + messageRaw;

        Component broadcast = MiniMessage.miniMessage().deserialize(fullMessage);

        plugin.getServer().getAllPlayers().forEach(player -> player.sendMessage(broadcast));

        if (plugin.getConfigHandler().isDebugEnabled()) {
            plugin.getLogger().info("[Broadcast] Sent: " + fullMessage);
        }
    }
}
