// utils/WishlistManager.ts
class WishlistManager {
    private static readonly STORAGE_KEY = 'wishlist';

    /**
     * Check if we're in browser environment
     */
    private static isBrowser(): boolean {
        return typeof window !== 'undefined';
    }

    /**
     * Get wishlist from localStorage
     */
    static getWishlist(): string[] {
        if (!this.isBrowser()) return [];

        try {
            const wishlist = localStorage.getItem(this.STORAGE_KEY);
            return wishlist ? JSON.parse(wishlist) : [];
        } catch (error) {
            console.error('Error reading wishlist from localStorage:', error);
            return [];
        }
    }

    /**
     * Save wishlist to localStorage
     */
    private static saveWishlist(wishlist: string[]): void {
        if (!this.isBrowser()) return;

        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(wishlist));
        } catch (error) {
            console.error('Error saving wishlist to localStorage:', error);
        }
    }

    /**
     * Add item to wishlist
     */
    static addToWishlist(id: string): boolean {
        const currentWishlist = this.getWishlist();

        if (currentWishlist.includes(id)) {
            return false; // Already exists
        }

        const updatedWishlist = [...currentWishlist, id];
        this.saveWishlist(updatedWishlist);
        return true; // Successfully added
    }

    /**
     * Remove item from wishlist
     */
    static removeFromWishlist(id: string): boolean {
        const currentWishlist = this.getWishlist();
        const updatedWishlist = currentWishlist.filter(item => item !== id);

        if (updatedWishlist.length === currentWishlist.length) {
            return false; // Item wasn't in wishlist
        }

        this.saveWishlist(updatedWishlist);
        return true; // Successfully removed
    }

    /**
     * Check if item is in wishlist
     */
    static isInWishlist(id: string): boolean {
        const wishlist = this.getWishlist();
        return wishlist.includes(id);
    }

    /**
     * Toggle item in wishlist (add if not present, remove if present)
     */
    static toggleWishlist(id: string): boolean {
        if (this.isInWishlist(id)) {
            this.removeFromWishlist(id);
            return false; // Removed
        } else {
            this.addToWishlist(id);
            return true; // Added
        }
    }

    /**
     * Get wishlist count
     */
    static getWishlistCount(): number {
        return this.getWishlist().length;
    }

    /**
     * Clear entire wishlist
     */
    static clearWishlist(): void {
        if (!this.isBrowser()) return;

        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing wishlist:', error);
        }
    }

    /**
     * Check if wishlist is empty
     */
    static isEmpty(): boolean {
        return this.getWishlistCount() === 0;
    }

    /**
     * Get wishlist as Set for faster lookups (useful for large lists)
     */
    static getWishlistSet(): Set<string> {
        return new Set(this.getWishlist());
    }
}

export default WishlistManager;