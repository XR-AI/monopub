# Settings & Customization

XRAI offers extensive customization options across multiple settings tabs.

## Accessing Settings

Tap the **settings icon** (sliders) in the bottom-right of the toolbar to open the Settings Drawer.

![Settings - General](../screenshots/settings-general.png)

## General Settings

### Interface Scaling

Adjust the overall UI scale from 60% to 550% to suit your display and accessibility needs.

### Speaker Identification (Diarization)

Toggle **Speaker identification** to label subtitles with speaker names. When enabled, each speaker gets a unique color-coded label.

### Profanity Filter

Toggle **Filter profanity** to automatically censor offensive language in subtitles.

### Data Saver

Enable **Data saver** to reduce cloud data usage by preferring on-device processing where possible.

### Speak Out Translated Text

Toggle **Speak out translated text** to have translations read aloud using Text-to-Speech.

### Stabilize Translation

Reduces translation flickering by buffering output slightly for smoother display.

### Idle Auto-Stop

Set an idle timeout (5, 10, 30, 60, 120, or 240 minutes) to automatically stop the session if no speech is detected. Set to 0 to disable.

### Subtitle Timeout

Control how long subtitles remain on screen after speech stops (0-20 seconds). Set to -1 to keep subtitles on screen indefinitely.

![Settings - Audio](../screenshots/settings-audio.png)

## Audio Settings

### Voice Activity Detection (VAD)

- **Enable VAD** - Toggle voice activity detection for better speech segmentation
- **Sensitivity** - Adjust how sensitive VAD is to speech vs background noise
- **Max Utterance** - Maximum length of a single speech segment

### Noise Cancellation

Toggle built-in noise cancellation (available on Windows and Linux).

### Microphone Selection

Choose which audio input device to use for speech capture.

![Settings - Text](../screenshots/settings-text.png)

## Text & Typography

### Font Weight

Choose between Light (200), Regular (400), or Bold (600) text weight.

### Text Alignment

Align subtitles to the Left, Center, or Right of the screen.

### Text Transform

Apply text transforms: None, UPPERCASE, lowercase, or Capitalize.

### Spacing Controls

Fine-tune:
- **Line spacing** - Vertical gap between subtitle lines
- **Letter spacing** - Gap between individual characters
- **Word spacing** - Gap between words
- **Panel height** - Height of the subtitle display area

### Reset to Defaults

Reset all typography settings back to factory defaults.

![Settings - Colors](../screenshots/settings-colors.png)

## Color & Theme Settings

### Themes

Choose from preset themes:
- **Classic** - Default XRAI theme
- **Neutral** - Minimal color palette
- **Contrast** - High-contrast for accessibility
- **Teams** - Microsoft Teams-style colors

Each theme has 8 hue variants: Red, Orange, Yellow, Green, Blue, Purple, Pink, and Teal.

### Dark / Light Mode

Switch between dark and light display modes.

### Speaker Colors

Customize the color palette used for speaker identification labels.

## AR Glasses Settings

Available when AR glasses are connected:

### AR Font Size

Choose from 24px, 28px, or 32px text size on the glasses display.

### AR Text Position

Position subtitles at the Bottom, Top, or Center of the glasses display.

### AR Brightness

Adjust display brightness from 0 to 5.

### Audio Record Mode

- **Face-to-face** - Optimized for one-on-one conversation
- **360 with NC** - Omnidirectional with noise cancellation
- **360 without NC** - Omnidirectional without noise cancellation

### Hide Wearer's Voice

Toggle whether the glasses wearer's own voice is included in the transcript.
