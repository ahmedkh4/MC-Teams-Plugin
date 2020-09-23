import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/checkListTab/index.html")
@PreventIframe("/checkListTab/config.html")
@PreventIframe("/checkListTab/remove.html")
export class CheckListTab {
}
