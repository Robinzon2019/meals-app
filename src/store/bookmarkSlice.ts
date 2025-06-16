import { type StateCreator } from "zustand";
import { createNotificationsSlice, type NotificationSliceType } from "./notificationSlice";
import type { Recipe } from "../shared/types/recipeTypes";

export type BookmarkSliceType = {
    bookmarks: Recipe[];
    addBookmark: (recipe: Recipe) => void;
    bookmarkExists: (id: Recipe['idMeal']) => boolean;	
    loadFromStorage: () => void;
}

export const createBookmarkSlice: StateCreator<BookmarkSliceType & NotificationSliceType, [], [],
BookmarkSliceType> = (set, get, api) => ({
    bookmarks: [],
    addBookmark: (recipe: Recipe) => {
       if(get().bookmarkExists(recipe.idMeal)) {
            set((state) => ({
                bookmarks: state.bookmarks
                    .filter(bookmark => bookmark.idMeal !== recipe.idMeal)  
            }))

            createNotificationsSlice(set, get, api).showNotification({
                text: 'Recipe removed from favorites',
                error: false
            })
        }
        else{
            set((state) => ({
                bookmarks: [...state.bookmarks, recipe]  
            }))

            createNotificationsSlice(set, get, api).showNotification({
                text: 'Recipe added to bookmarks',
                error: false
            })
        }
        localStorage.setItem('', JSON.stringify(get().bookmarks))
    },
    bookmarkExists: (id) => {
        return get().bookmarks.some(bookmark => bookmark.idMeal === id);
    },
    loadFromStorage: () => {
        set({
            bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]')
        })
    }
})