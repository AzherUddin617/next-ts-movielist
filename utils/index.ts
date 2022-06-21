import { BookmarkDataType } from "../store/features/bookmarkSlice";

export const isBookmarded = (id: number | string, data: BookmarkDataType) => {
    return id in data && data[id].active;
}