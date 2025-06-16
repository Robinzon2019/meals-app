import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice';
import { createBookmarkSlice, type BookmarkSliceType } from './bookmarkSlice';
import { type NotificationSliceType, createNotificationsSlice } from './notificationSlice';


export const useAppStore = create<RecipesSliceType & BookmarkSliceType & NotificationSliceType>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createBookmarkSlice(...a),
        ...createNotificationsSlice(...a)
    }))
)