# AI Engine Priority: How It Works

XRAI uses a smart engine priority system to automatically select the best AI engine for your needs. Whether you want cloud-powered accuracy, offline on-device processing, or full manual control, the AI Engine Priority panel puts you in charge.

## Opening the AI Engine Priority Panel

To access the AI Engine Priority settings, **long-press** the mode icon in the bottom toolbar. A short tap cycles through modes quickly; a long press opens the full configuration panel.

![Cloud Mode - Simple View](../screenshots/engine-priority-cloud-simple.png)

## Processing Modes

The **"Run AI on"** toggle at the top of the panel lets you choose where your AI processing happens. There are three modes:

### Cloud

Cloud mode uses internet-connected AI engines hosted on remote servers. These engines generally offer the highest accuracy and support the widest range of languages.

- Requires an active internet connection
- Engines include: **XRAI**, **Google**, **Microsoft**, **Amazon**, **Deepgram**
- Some cloud engines are free; others are metered (shown with a usage badge)

![Cloud Mode](../screenshots/engine-priority-cloud-simple.png)

### On Device

On Device mode runs AI engines locally on your device. This is ideal for situations where you have no internet connection, or when you want to keep all processing private.

- No internet connection required
- Engines include: **NVIDIA**, **Alibaba**, **Apple**
- All on-device engines are free to use
- Some engines may require a one-time model download before first use

![On Device Mode](../screenshots/engine-priority-ondevice-simple.png)

### Custom

Custom mode gives you full control over engine priority across both cloud and on-device engines. This is useful when you want to mix cloud and on-device engines in a specific order.

![Custom Mode](../screenshots/engine-priority-custom-simple.png)

## AI Categories

Each mode manages engines across three AI categories, accessible via tabs:

### Speech-to-Text (STT)

Converts spoken audio into text. This is the core transcription engine that powers your subtitles.

### Translation

Translates text from one language to another. Used when you enable translation to display subtitles in a different language from the one being spoken.

![Translation Tab](../screenshots/engine-priority-translation.png)

### Text-to-Speech (TTS)

Converts translated text back into spoken audio. Used when you enable "Speak out translated text" to hear translations read aloud.

![Text-to-Speech Tab](../screenshots/engine-priority-tts.png)

## How Engine Selection Works

XRAI uses a **"best available engine"** algorithm. For each AI category (STT, Translation, TTS), the system walks through your priority list from top to bottom and selects the first engine that meets all requirements:

1. **Language support** - Does the engine support your selected language(s)?
2. **Multi-language support** - If multiple languages are selected, does the engine support language identification?
3. **Availability** - Is the engine available right now? (Cloud engines need internet; on-device engines need downloaded models)

The first engine that passes all checks is used. If no engine qualifies, the system relaxes constraints and tries again.

## Simple vs Advanced Mode

### Simple Mode (Default)

In Simple mode, you see a list of available engines with **Select** buttons. Tap an engine to make it your top priority. The currently selected engine shows a green checkmark.

![Simple Mode](../screenshots/engine-priority-cloud-simple.png)

### Advanced Mode (Drag and Drop)

Tap **Advanced** next to "Priority order" to switch to drag-and-drop mode. Here you can manually reorder engines by dragging them up or down. The engine at position 1 has the highest priority.

- Drag handles appear on the left side of each engine
- Priority numbers are shown on the right
- The label reads **"Drag to reorder (top = highest)"**

![Advanced Mode](../screenshots/engine-priority-custom-advanced.png)

## Engine Cost Indicators

Each engine displays a cost badge:

- **Free** (green badge) - No usage charges
- **x1** (metered badge) - Uses metered credits from your plan

## Tips

- **No internet?** Switch to On Device mode to keep transcribing without a connection
- **Want the best accuracy?** Cloud mode with XRAI as the top engine generally provides the best results
- **Privacy-focused?** On Device mode keeps all processing on your device
- **Power user?** Use Custom + Advanced mode to create your ideal engine fallback chain across both cloud and on-device engines
