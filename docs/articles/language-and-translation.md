# Language & Translation

XRAI supports 100+ languages for speech-to-text transcription and translation.

## Selecting Languages

Tap the **language icon** (bottom-left of the toolbar) to open the Language Drawer.

![Language Drawer](../screenshots/language-drawer.png)

### Source Language

The source language is the language being spoken. You can:

- **Pick a specific language** from the list (e.g., English, French, Japanese)
- **Use Auto-Detect** to let XRAI automatically identify the spoken language

### Target Language

The target language is the language subtitles will be translated into. If you don't need translation, leave this unset — subtitles will appear in the source language.

### Favorites

Pin frequently-used languages to the top of the list by tapping the star icon next to a language. This makes switching between languages faster.

## Translation Features

### Split-Screen Translation

When translation is enabled, you can toggle **Split Screen** mode in Settings to show both the original text and the translated text simultaneously. Use the swap button to flip which language appears on top.

### Auto-Reverse (Bilingual Mode)

For bilingual conversations where two languages are being spoken, enable **Auto-Reverse**. XRAI will detect which language is being spoken and automatically reverse the translation direction. For example, in an English-French conversation, English speech shows French subtitles and vice versa.

### Stabilize Translation

Enable **Stabilize Translation** in Settings to reduce flickering when translations are being refined in real time. This buffers the output slightly for smoother display.

## Translation Engines

Translation uses a separate engine priority list from speech-to-text. Available engines include:

- **Meta** (On Device, Free) - Offline translation using NLLB models
- **XRAI** (Cloud, Free) - Cloud-based translation
- **Google** (Cloud, Metered) - Google Translate
- **Microsoft** (Cloud, Metered) - Azure Translator

See [AI Engine Priority](ai-engine-priority.md) for details on configuring engine order.

## Offline Language Models

Some languages can be used offline by downloading on-device models. See [Offline Models](offline-models.md) for details on downloading and managing language packs.

## Text-to-Speech

XRAI can read translated text aloud using Text-to-Speech. Enable **Speak out translated text** in Settings. TTS engines include:

- **VibeVoice** (On Device, Free) - High-quality on-device voices
- **Apple** (On Device, Free) - System TTS on Apple devices
- **Google** (Cloud, Metered) - Google Cloud TTS

See [AI Engine Priority](ai-engine-priority.md) for details on configuring TTS engine order.
