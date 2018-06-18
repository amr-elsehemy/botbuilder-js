import { Activity, CardAction, Attachment, InputHints } from 'botbuilder-core';
/**
 * A set of utility functions to assist with the formatting of the various message types a bot can
 * return.
 *
 * @remarks
 * The following example shows sending a message containing a single hero card:
 *
 * ```JavaScript
 * const message = MessageFactory.attachment(
 *     CardFactory.heroCard(
 *         'White T-Shirt',
 *         ['https://example.com/whiteShirt.jpg'],
 *         ['buy']
 *      )
 * );
 * await context.sendActivity(message);
 * ```
 */
export declare class MessageFactory {
    /**
     * Returns a simple text message.
     *
     * @remarks
     * This example shows sending a simple text message:
     *
     * ```JavaScript
     * const message = MessageFactory.text('Greetings from example message');
     * await context.sendActivity(message);
     * ```
     *
     * @param text Text to include in the message.
     * @param speak (Optional) SSML to include in the message.
     * @param inputHint (Optional) input hint for the message. Defaults to `acceptingInput`.
     */
    static text(text: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
    /**
     * Returns a message that includes a set of suggested actions and optional text.
     *
     * @remarks
     * This example shows sending a message with suggested actions:
     *
     * ```JavaScript
     * const message = MessageFactory.suggestedActions(['red', 'green', 'blue'], `Choose a color`);
     * await context.sendActivity(message);
     * ```
     * @param actions Array of card actions or strings to include. Strings will be converted to `messageBack` actions.
     * @param text (Optional) text of the message.
     * @param speak (Optional) SSML to include with the message.
     * @param inputHint (Optional) input hint for the message. Defaults to `acceptingInput`.
     */
    static suggestedActions(actions: (CardAction | string)[], text?: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
    /**
     * Returns a single message activity containing an attachment.
     *
     * @remarks
     * This example shows sending a message with a hero card attachment:
     *
     * ```JavaScript
     * const message = MessageFactory.attachment(
     *     CardFactory.heroCard(
     *         'White T-Shirt',
     *         ['https://example.com/whiteShirt.jpg'],
     *         ['buy']
     *      )
     * );
     * await context.sendActivity(message);
     * ```
     *
     * @param attachment Adaptive card to include in the message.
     * @param text (Optional) text of the message.
     * @param speak (Optional) SSML to include with the message.
     * @param inputHint (Optional) input hint for the message. Defaults to `acceptingInput`.
     */
    static attachment(attachment: Attachment, text?: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
    /**
     * Returns a message that will display a set of attachments in list form.
     *
     * @remarks
     * This example shows sending a message with a list of hero cards:
     *
     * ```JavaScript
     * const message = MessageFactory.list([
     *    CardFactory.heroCard('title1', ['imageUrl1'], ['button1']),
     *    CardFactory.heroCard('title2', ['imageUrl2'], ['button2']),
     *    CardFactory.heroCard('title3', ['imageUrl3'], ['button3'])
     * ]);
     * await context.sendActivity(message);
     * ```
     * @param attachments Array of attachments to include in the message.
     * @param text (Optional) text of the message.
     * @param speak (Optional) SSML to include with the message.
     * @param inputHint (Optional) input hint for the message.
     */
    static list(attachments: Attachment[], text?: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
    /**
     * Returns a message that will display a set of attachments using a carousel layout.
     *
     * @remarks
     * This example shows sending a message with a carousel of hero cards:
     *
     * ```JavaScript
     * const message = MessageFactory.carousel([
     *    CardFactory.heroCard('title1', ['imageUrl1'], ['button1']),
     *    CardFactory.heroCard('title2', ['imageUrl2'], ['button2']),
     *    CardFactory.heroCard('title3', ['imageUrl3'], ['button3'])
     * ]);
     * await context.sendActivity(message);
     * ```
     *
     * @param attachments Array of attachments to include in the message.
     * @param text (Optional) text of the message.
     * @param speak (Optional) SSML to include with the message.
     * @param inputHint (Optional) input hint for the message.
     */
    static carousel(attachments: Attachment[], text?: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
    /**
     * Returns a message that will display a single image or video to a user.
     *
     * @remarks
     * This example shows sending an image to the user:
     *
     * ```JavaScript
     * const message = MessageFactory.contentUrl('https://example.com/hawaii.jpg', 'image/jpeg', 'Hawaii Trip', 'A photo from our family vacation.');
     * await context.sendActivity(message);
     * ```
     *
     * @param url Url of the image/video to send.
     * @param contentType The MIME type of the image/video.
     * @param name (Optional) Name of the image/video file.
     * @param text (Optional) text of the message.
     * @param speak (Optional) SSML to include with the message.
     * @param inputHint (Optional) input hint for the message.
     */
    static contentUrl(url: string, contentType: string, name?: string, text?: string, speak?: string, inputHint?: InputHints | string): Partial<Activity>;
}
