export default function useDebounce<T extends (...args: any[]) => any>(
	func: T,
	timeout: number
): (...args: Parameters<T>) => void {
	let timeoutId: ReturnType<typeof setTimeout>

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			func(...args)
		}, timeout)
	}
}
