import { createStore, useSelector } from '@tanstack/solid-store';

export interface TabItem {
  path: string;
  label: string;
}

interface ContentPanelStore {
  activePath: string | null;
  tabs: TabItem[]
}
// You can instantiate the store outside of Solid components too!
export const contentPanelStore = createStore<ContentPanelStore>({
  activePath: null,
  tabs: [],
})

// interface videoViewerStore {

// }

export const setActivePath = (path: string | null) => {
  contentPanelStore.setState((state) => ({ ...state, activePath: path }));
}

export const useTabs = () => useSelector(contentPanelStore, (state) => state.tabs)
export const setTabs = (tabs: TabItem[]) => {
  contentPanelStore.setState((state) => ({ ...state, tabs }));
}

export const addTab = (tab: TabItem) => {
  contentPanelStore.setState((state) => ({ ...state, tabs: [...state.tabs, tab] }));
}
export const closeTab = (path: string) => {
  contentPanelStore.setState((state) => {
    const filtered = state.tabs.filter((t) => t.path !== path);
    // 如果关掉的是当前活跃 tab，切换到最后一个或 null
    if (path === state.activePath) {
      setActivePath(filtered.length > 0 ? filtered[filtered.length - 1].path : null);
    }
    return ({ ...state, tabs: filtered })
  });
}
