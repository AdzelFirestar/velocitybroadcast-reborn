package com.adzel.velocitybroadcast;

import java.util.List;

import com.velocitypowered.api.command.CommandSource;
import com.velocitypowered.api.command.SimpleCommand;

import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.minimessage.MiniMessage;

public class VBCommand implements SimpleCommand {

    private final VelocityBroadcast plugin;
    private final MiniMessage mm = MiniMessage.miniMessage();

    public VBCommand(VelocityBroadcast plugin) {
        this.plugin = plugin;
    }

    @Override
    public void execute(Invocation invocation) {
        CommandSource source = invocation.source();
        List<String> args = List.of(invocation.arguments());

        if (args.isEmpty() || args.get(0).equalsIgnoreCase("help")) {
            source.sendMessage(parseFormatted("<gold><bold>VelocityBroadcast Commands:</bold></gold>"));
            source.sendMessage(parseFormatted("<yellow>/vb <message></yellow> <gray>- Broadcast a message to all players</gray>"));

            if (source.hasPermission("vb.admin")) {
                source.sendMessage(parseFormatted("<yellow>/vb prefix <newPrefix></yellow> <gray>- Change the broadcast prefix</gray>"));
                source.sendMessage(parseFormatted("<yellow>/vb reload</yellow> <gray>- Reload the plugin config</gray>"));
            }
            return;
        }

        String sub = args.get(0).toLowerCase();
        List<String> subArgs = args.subList(1, args.size());

        switch (sub) {
            case "prefix":
                if (!source.hasPermission("vb.admin")) {
                    source.sendMessage(parseFormatted("<red>You don't have permission to change the broadcast prefix.</red>"));
                    return;
                }

                if (subArgs.isEmpty()) {
                    source.sendMessage(parseFormatted("<red>Usage: /vb prefix <newPrefix></red>"));
                    return;
                }

                String newPrefix = String.join(" ", subArgs);
                plugin.getConfigHandler().setPrefix(newPrefix);
                source.sendMessage(parseFormatted("<green>Prefix updated to:</green> <gray>" + newPrefix + "</gray>"));
                if (plugin.getConfigHandler().isDebugEnabled()) {
                    plugin.getLogger().info("[Prefix] Updated prefix to: " + newPrefix);
                }
                break;

            case "reload":
                if (!source.hasPermission("vb.admin")) {
                    source.sendMessage(parseFormatted("<red>You don't have permission to reload the config.</red>"));
                    return;
                }

                plugin.getConfigHandler().reload();
                source.sendMessage(parseFormatted("<green>VelocityBroadcast config reloaded.</green>"));
                if (plugin.getConfigHandler().isDebugEnabled()) {
                    plugin.getLogger().info("[Reload] Config reloaded by " + source.toString());
                }
                break;

            default:
                // Treat as broadcast message
                if (!source.hasPermission("vb.broadcast")) {
                    source.sendMessage(parseFormatted("<red>You don't have permission to broadcast.</red>"));
                    return;
                }

                String fullMessage = plugin.getConfigHandler().getPrefix() + String.join(" ", args);
                Component broadcast = parseFormatted(fullMessage);
                plugin.getServer().getAllPlayers().forEach(p -> p.sendMessage(broadcast));

                if (plugin.getConfigHandler().isDebugEnabled()) {
                    plugin.getLogger().info("[Broadcast] Sent: " + fullMessage);
                }
                break;
        }
    }

    private Component parseFormatted(String input) {
        String mini = input
                .replace("&0", "<black>")
                .replace("&1", "<dark_blue>")
                .replace("&2", "<dark_green>")
                .replace("&3", "<dark_aqua>")
                .replace("&4", "<dark_red>")
                .replace("&5", "<dark_purple>")
                .replace("&6", "<gold>")
                .replace("&7", "<gray>")
                .replace("&8", "<dark_gray>")
                .replace("&9", "<blue>")
                .replace("&a", "<green>")
                .replace("&b", "<aqua>")
                .replace("&c", "<red>")
                .replace("&d", "<light_purple>")
                .replace("&e", "<yellow>")
                .replace("&f", "<white>")
                .replace("&l", "<bold>")
                .replace("&n", "<underlined>")
                .replace("&o", "<italic>")
                .replace("&m", "<strikethrough>")
                .replace("&r", "<reset>");

        return mm.deserialize(mini);
    }
}
