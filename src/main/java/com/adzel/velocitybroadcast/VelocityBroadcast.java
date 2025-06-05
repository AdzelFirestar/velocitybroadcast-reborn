package com.adzel.velocitybroadcast;

import java.nio.file.Path;

import org.slf4j.Logger;

import com.google.inject.Inject;
import com.velocitypowered.api.event.PostOrder;
import com.velocitypowered.api.event.Subscribe;
import com.velocitypowered.api.event.connection.LoginEvent;
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent;
import com.velocitypowered.api.plugin.Plugin;
import com.velocitypowered.api.plugin.annotation.DataDirectory;
import com.velocitypowered.api.proxy.ProxyServer;

import net.kyori.adventure.text.minimessage.MiniMessage;

@Plugin(
    id = "velocitybroadcast",
    name = "VelocityBroadcast",
    version = "0.2-pre",
    description = "A proxy-wide broadcast plugin for Velocity.",
    authors = {"Adzel"}
)
public class VelocityBroadcast {

    public static final String PLUGIN_VERSION = "0.2-pre";
    public static final MiniMessage MINI_MESSAGE = MiniMessage.miniMessage();

    private final ProxyServer server;
    private final Logger logger;
    private final Path dataDirectory;
    private ConfigHandler config;

    @Inject
    public VelocityBroadcast(ProxyServer server, Logger logger, @DataDirectory Path dataDirectory) {
        this.server = server;
        this.logger = logger;
        this.dataDirectory = dataDirectory;
    }

    @Subscribe(order = PostOrder.EARLY)
    public void onProxyInitialization(ProxyInitializeEvent event) {
        // Load config
        this.config = new ConfigHandler(dataDirectory.resolve("config.yml"), logger);
        config.load();

        if (config.isDebugEnabled()) {
            logger.info("[VelocityBroadcast] Debug mode is enabled.");
        }

        // Register the root /vb command handler
        server.getCommandManager().register(
            server.getCommandManager().metaBuilder("vb").plugin(this).build(),
            new VBCommand(this)
        );

        logger.info("[VelocityBroadcast] Loaded VelocityBroadcast v" + PLUGIN_VERSION);
    }

    @Subscribe
    public void onLogin(LoginEvent event) {
        if (event.getPlayer().hasPermission("vb.admin") && config.isVersionCheckEnabled()) {
            event.getPlayer().sendMessage(
                MINI_MESSAGE.deserialize("<yellow>[VelocityBroadcast] You're running version " + PLUGIN_VERSION + ".</yellow>")
            );
        }
    }

    public ProxyServer getServer() {
        return server;
    }

    public Logger getLogger() {
        return logger;
    }

    public ConfigHandler getConfigHandler() {
        return config;
    }
}
