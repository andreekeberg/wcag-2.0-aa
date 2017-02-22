# Principle 1 – Perceivable
Information and user interface components must be presentable to users in ways they can perceive.

## Guideline 1.1 – Text Alternatives
Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

### 1.1.1 Non-text Content - Level A
- [ ] All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. 

* Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)
* Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)
* Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.
* Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.
* CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.
* Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.

## Guideline 1.2 – Time-based Media
Provide alternatives for time-based media.

### 1.2.1 Audio-only and Video-only (Prerecorded) - Level A
- [ ] For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: 

* Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
* Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

### 1.2.2 Captions (Prerecorded) - Level A
- [ ] Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

### 1.2.3 Audio Description or Media Alternative (Prerecorded) - Level A
- [ ] An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

### 1.2.4 Captions (Live) - Level AA
- [ ] Captions are provided for all live audio content in synchronized media.

### 1.2.5 Audio Description (Prerecorded) - Level AA
- [ ] Audio description is provided for all prerecorded video content in synchronized media.

## Guideline 1.3 – Adaptable
Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

### 1.3.1 Info and Relationships - Level A
- [ ] Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

### 1.3.2 Meaningful Sequence - Level A
- [ ] When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

### 1.3.3 Sensory Characteristics - Level A
- [ ] Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.

_Note 1: For requirements related to color, refer to Guideline 1.4._

## Guideline 1.4 – Distinguishable
Make it easier for users to see and hear content including separating foreground from background.

### 1.4.1 Use of Color - Level A
- [ ] Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

_Note 1: This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding._

### 1.4.2 Audio Control - Level A
- [ ] If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

_Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference._

### 1.4.3 Contrast (Minimum) - Level AA
- [ ] The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: 

* Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
* Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
* Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

### 1.4.4 Resize text - Level AA
- [ ] Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

### 1.4.5 Images of Text - Level AA
- [ ] If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: 

* Customizable: The image of text can be visually customized to the user's requirements;
* Essential: A particular presentation of text is essential to the information being conveyed.

_Note 1: Logotypes (text that is part of a logo or brand name) are considered essential._

# Principle 2 – Operable
User interface components and navigation must be operable.

## Guideline 2.1 – Keyboard Accessible
Make all functionality available from a keyboard.

### 2.1.1 Keyboard - Level A
- [ ] All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

_Note 1: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not._

_Note 2: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation._

### 2.1.2 No Keyboard Trap - Level A
- [ ] If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

_Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference._

## Guideline 2.2 – Enough Time
Provide users enough time to read and use content.

### 2.2.1 Timing Adjustable - Level A
- [ ] For each time limit that is set by the content, at least one of the following is true: 

* Turn off: The user is allowed to turn off the time limit before encountering it; or
* Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
* Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
* Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
* Essential Exception: The time limit is essential and extending it would invalidate the activity; or
* 20 Hour Exception: The time limit is longer than 20 hours.

_Note 1: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action._

### 2.2.2 Pause, Stop, Hide - Level A
- [ ] For moving, blinking, scrolling, or auto-updating information, all of the following are true: 

* Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
* Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

_Note 1: For requirements related to flickering or flashing content, refer to Guideline 2.3._

_Note 2: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference._

_Note 3: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so._

_Note 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken._

## Guideline 2.3 – Seizures
Do not design content in a way that is known to cause seizures.

### 2.3.1 Three Flashes or Below Threshold - Level A
- [ ] Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.

_Note 1: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference._

## Guideline 2.4 – Navigable
Provide ways to help users navigate, find content, and determine where they are.

### 2.4.1 Bypass Blocks - Level A
- [ ] A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

### 2.4.2 Page Titled - Level A
- [ ] Web pages have titles that describe topic or purpose.

### 2.4.3 Focus Order - Level A
- [ ] If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

### 2.4.4 Link Purpose (In Context) - Level A
- [ ] The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

### 2.4.5 Multiple Ways - Level AA
- [ ] More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.

### 2.4.6 Headings and Labels - Level AA
- [ ] Headings and labels describe topic or purpose.

### 2.4.7 Focus Visible - Level AA
- [ ] Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

# Principle 3 – Understandable
Information and the operation of user interface must be understandable.

## Guideline 3.1 – Readable
Make text content readable and understandable.

### 3.1.1 Language of Page - Level A
- [ ] The default human language of each Web page can be programmatically determined.

### 3.1.2 Language of Parts - Level AA
- [ ] The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

## Guideline 3.2 – Predictable
Make Web pages appear and operate in predictable ways.

### 3.2.1 On Focus - Level A
- [ ] When any component receives focus, it does not initiate a change of context.

### 3.2.2 On Input - Level A
- [ ] Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

### 3.2.3 Consistent Navigation - Level AA
- [ ] Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

### 3.2.4 Consistent Identification - Level AA
- [ ] Components that have the same functionality within a set of Web pages are identified consistently.

## Guideline 3.3 – Input Assistance
Help users avoid and correct mistakes.

### 3.3.1 Error Identification - Level A
- [ ] If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

### 3.3.2 Labels or Instructions - Level A
- [ ] Labels or instructions are provided when content requires user input.

### 3.3.3 Error Suggestion - Level AA
- [ ] If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

### 3.3.4 Error Prevention (Legal, Financial, Data) - Level AA
- [ ] For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: 

- [ ] Reversible: Submissions are reversible.

- [ ] Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.

- [ ] Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

# Principle 4 – Robust
Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

## Guideline 4.1 – Compatible
Maximize compatibility with current and future user agents, including assistive technologies.

### 4.1.1 Parsing - Level A
- [ ] In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

_Note 1: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete._

### 4.1.2 Name, Role, Value - Level A
- [ ] For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

_Note 1: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification._
