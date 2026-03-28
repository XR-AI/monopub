# Offline Models

XRAI can run speech-to-text and translation entirely on your device without an internet connection by downloading offline AI models.

## Why Use Offline Models?

- **No internet required** - Transcribe and translate without connectivity
- **Privacy** - All processing stays on your device
- **Free** - No metered usage charges for on-device processing
- **Low latency** - No network round-trip delay

## Accessing Offline Models

Open the **Offline Models** drawer from Settings or the Engine Priority panel to browse and manage downloadable models.

## Speech-to-Text Models

On-device STT models are available from multiple vendors:

- **NVIDIA** - High-accuracy on-device transcription
- **Alibaba** - Multi-language on-device transcription
- **Apple** - System speech recognition (Apple devices only)

Each vendor may offer multiple language-specific models. Download the models for the languages you need.

## Translation Models

On-device translation uses **Meta NLLB** (No Language Left Behind) models that support 200+ language pairs without cloud connectivity.

## Managing Models

### Download

Browse available models and tap **Download** to save them to your device. Download progress is shown in real time.

### Storage Usage

The Offline Models drawer displays total storage used by downloaded models in megabytes.

### Delete

Remove downloaded models you no longer need to free up storage space.

### Search

Use the search bar to find models by language name or vendor.

## Model Requirements

### VibeVoice (TTS)

VibeVoice requires two components:
1. **Core engine** - The base TTS engine
2. **Voice model** - A specific voice pack

Both must be downloaded for VibeVoice to work offline.

## Availability

Offline model availability depends on your subscription tier:

- **Free** - Cloud STT only, no offline models
- **Premium** - On-device models available for download
- **Ultimate** - All models including priority cloud engines

See [Subscriptions & Usage](subscriptions-and-usage.md) for details on plan features.
