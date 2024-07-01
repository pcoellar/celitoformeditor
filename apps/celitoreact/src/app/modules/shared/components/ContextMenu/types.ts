export interface IProps {
    items: IContextMenuItem[];
    closeFunction: () => void;
}

export interface IPropsItem{
    item: IContextMenuItem
    closeFunction: () => void;
}

export interface IPropsItemsSubMenu{
    subitems: IContextSubMenuItem[]
    closeFunction: () => void;
}

export interface IPropsItemSubMenu{
    subitem: IContextSubMenuItem
    closeFunction: () => void;
}

export interface IContextMenuItem{
    iconName?: string,
    text: string,
    itemsSubmenu?: IContextSubMenuItem[], 
    onClick?: ()=>void,
    selected?: boolean,
    disabled?: boolean,
    header?: boolean,
}

export interface IContextSubMenuItem{
    iconName?: string,
    text: string,
    onClick?: ()=>void,
    selected?: boolean,
    disabled?: boolean,
    header?: boolean,
}