import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import Modal from "./Modal" ;
/**
 * State for the checkListTabTab React component
 */
export default interface ICheckListTabState extends ITeamsBaseComponentState {
    entityId?: string;
}

/**
 * Properties for the checkListTabTab React component
 */
export interface ICheckListTabProps {

}

/**
 * Implementation of the check list content page
 */
export class CheckListTab extends TeamsBaseComponent<ICheckListTabProps, ICheckListTabState> {

    public async componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));


        if (await this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
            microsoftTeams.getContext((context) => {
                microsoftTeams.appInitialization.notifySuccess();
                this.setState({
                    entityId: context.entityId
                });
                this.updateTheme(context.theme);
            });
        } else {
            this.setState({
                entityId: "This is not hosted in Microsoft Teams"
            });
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        return (
            <Provider theme={this.state.theme}>
                <Flex fill={true} column styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Flex.Item>
                        <Header content="This is your tab Ahmed " />
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                        <div><Modal></Modal></div>
                           <div>
                                <Text content={this.state.entityId} />
                            </div>
                            <div>
                               <Button className="btn btn-info" onClick={() => alert("It worked!")}>A  button</Button> {" "}

                               <Button className="btn btn-danger" onClick={() =>alert("second buttton")}>A  button</Button>
                            </div>
                            <div><Modal></Modal></div>
                        </div>
                           
                    </Flex.Item>
                    <Flex.Item styles={{
                        padding: ".8rem 0 .8rem .5rem"
                    }}>
                        <Text size="smaller" content="(C) Copyright Ahmed khadraoui" />
                    </Flex.Item>
                </Flex>
            </Provider>
        );
    }
}
