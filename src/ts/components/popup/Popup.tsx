import { loadModules } from 'esri-loader';
import * as React from 'react';


export interface PopupProps {
    map?: __esri.Map;
    view?: __esri.SceneView | __esri.MapView;
    popupProperties: PopupProperties;
    onTriggerAction?: (e:any) => any;
};

interface PopupProperties extends __esri.PopupOpenOptions {
    location: __esri.Geometry | number[] | any;
};

interface ComponentState {
    map?: __esri.Map;
    mounted: boolean;
    view?: __esri.View;
};

export default class Popup extends React.Component<PopupProps, ComponentState> {
    content: HTMLElement;
    constructor(props: PopupProps) {
        super(props);
        this.state = {
            map: this.props.map,
            mounted: false,
            view: this.props.view,
        };
    }

    public render() {
      if (this.props.children) {
        return (
          <div>
            <div ref={ref => {if (ref) this.content=ref}}>
              {this.props.children}
            </div>
          </div>
        )
      }
      return null;
    }

    public componentDidMount() {
        if (this.props.popupProperties) {
            let popupProps : PopupProperties = {
              content: this.content as any,
              ...this.props.popupProperties
            }
            if (this.state.view) {
                this.state.view.popup.open(popupProps);
                if (this.props.onTriggerAction) {
                this.state.view.popup.on('trigger-action', this.props.onTriggerAction);
                }
            }
            this.setState({
                mounted: true
            });
        } else {
            console.warn('React-arcgis attempted to display a popup without any content. Please include popupProperties in order to see the popup.');
        }
    }

    public componentWillUnmount() {
        if (this.state.mounted) {
            if (this.state.view) {
                this.state.view.popup.close();
            }
            this.setState({
                mounted: false
            });
        }
    }

    public componentWillReceiveProps(nextProps: PopupProps) {
        if (nextProps.popupProperties && this.state.mounted && nextProps.popupProperties !== this.props.popupProperties) {
            if (this.state.view) {
                this.state.view.popup.close();
                this.state.view.popup.open(nextProps.popupProperties);
            }
        }
    }
}
