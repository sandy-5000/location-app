import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

export default function App() {
	const [record, setRecord] = useState('')
	const [person, setPerson] = useState({ name: 'Sandy Blaze', age: 3000 })
	const [location, setLocation] = useState({ lat: null, lng: null })
	const [people, setPeople] = useState([
		{ name: 'jane', age: 29 },
		{ name: 'videl', age: 27 },
		{ name: 'mario', age: 32 },
		{ name: 'luigi', age: 31 },
		{ name: 'carl', age: 35 },
		{ name: 'tommy', age: 36 },
	])

	const clickHandler = () => {
		setPerson({ name: 'Demon King of Tyanny', age: 3000 })
	}

	const displayLocation = () => {
		Geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					lat: JSON.stringify(position.coords.latitude),
					lng: JSON.stringify(position.coords.longitude),
				})
			},
			(error) => {
				alert(error.message)
			}, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		)
	}

	return (
		<View style={styles.container}>
			<View style={[styles.center, { minWidth: '100%' }]}>
				<View style={[styles.header, styles.my2, { backgroundColor: 'steelblue' }]}>
					<Text style={[styles.textWhite]}>Track Location</Text>
				</View>
				<Text style={[styles.my2]}>-- Details --</Text>
				<View style={[{ flex: 1, flexDirection: 'row' }]}>
					<View style={[styles.my2]}>
						<Text style={[styles.my2]}>Name</Text>
						<Text style={[styles.my2]}>Age</Text>
					</View>
					<View style={[styles.my2, { flex: 1, alignItems: 'flex-start' }]}>
						<Text style={[styles.my2]}> : {person.name}</Text>
						<Text style={[styles.my2]}> : {person.age}</Text>
					</View>
				</View>
				<Text style={[styles.my2]}>-- Location --</Text>
				<View>
					{
						location.lat != null && location.lng != null && <>
							<View style={[styles.my2, { flex: 1, flexDirection: 'row' }]}>
								<View style={[styles.my2]}>
									<Text style={[styles.my2]}>Lat</Text>
									<Text style={[styles.my2]}>Lng</Text>
								</View>
								<View style={[styles.my2]}>
									<Text style={[styles.my2]}> : {location.lat}</Text>
									<Text style={[styles.my2]}> : {location.lng}</Text>
								</View>
							</View>
						</>
					}
				</View>
				<TouchableOpacity style={[styles.button]} onPress={clickHandler}>
					<Text>Update</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button]} onPress={displayLocation}>
					<Text>Show Location</Text>
				</TouchableOpacity>
				<View style={styles.my2}></View>
				<TextInput
					placeholder='Enter something'
					placeholderTextColor='#aaa'
					style={[styles.formControl, styles.my2]}
					onChangeText={(val) => setRecord(val)}
				/>
				<Text style={[styles.my2]}>{record}</Text>
				<View style={[styles.my2]}>
					{
						people.map((x, index) => {
							return (
								<View style={[{ flex: 1, flexDirection: 'row' }]} key={index}>
									<Text style={[styles.my2]}>Name: {x.name}, </Text>
									<Text style={[styles.my2]}>Age: {x.age}</Text>
								</View>
							)
						})
					}
				</View>
				<StatusBar style="auto" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	button: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderRadius: 4,
		backgroundColor: 'oldlace',
		alignSelf: 'flex-center',
		marginHorizontal: '1%',
		marginBottom: 6,
		minWidth: '48%',
		textAlign: 'center',
	},
	header: {
		backgroundColor: '#222',
		padding: 10,
		borderRadius: 10,
	},
	textWhite: {
		color: '#eee',
	},
	my2: {
		marginBottom: 10,
	},
	center: {
		alignItems: 'center',
	},
	formControl: {
		width: '100%',
		borderWidth: 3,
		borderRadius: 5,
		borderColor: 'oldlace',
		height: 50,
		padding: 10,
	},
})

// import React, { useState } from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// export default function App() {
// 	const [flexDirection, setflexDirection] = useState('row')

// 	return (
// 		<PreviewLayout
// 			label="flexDirection"
// 			values={['row', 'column', 'row-reverse', 'column-reverse']}
// 			selectedValue={flexDirection}
// 			setSelectedValue={setflexDirection}>
// 			<View style={[styles.box, { backgroundColor: 'powderblue' }]} />
// 			<View style={[styles.box, { backgroundColor: 'skyblue' }]} />
// 			<View style={[styles.box, { backgroundColor: 'steelblue' }]} />
// 		</PreviewLayout>
// 	)
// }

// const PreviewLayout = ({
// 	label,
// 	children,
// 	values,
// 	selectedValue,
// 	setSelectedValue,
// }) => (
// 	<View style={{ padding: 10, flex: 1 }}>
// 		<Text style={styles.label}>{label}</Text>
// 		<View style={styles.row}>
// 			{values.map(value => (
// 				<TouchableOpacity
// 					key={value}
// 					onPress={() => setSelectedValue(value)}
// 					style={[styles.button, selectedValue === value && styles.selected]}>
// 					<Text
// 						style={[
// 							styles.buttonLabel,
// 							selectedValue === value && styles.selectedLabel,
// 						]}>
// 						{value}
// 					</Text>
// 				</TouchableOpacity>
// 			))}
// 		</View>
// 		<View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
// 	</View>
// )

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: 8,
// 		backgroundColor: 'aliceblue',
// 	},
// 	box: {
// 		width: 50,
// 		height: 50,
// 	},
// 	row: {
// 		flexDirection: 'row',
// 		flexWrap: 'wrap',
// 	},
// 	button: {
// 		paddingHorizontal: 8,
// 		paddingVertical: 6,
// 		borderRadius: 4,
// 		backgroundColor: 'oldlace',
// 		alignSelf: 'flex-start',
// 		marginHorizontal: '1%',
// 		marginBottom: 6,
// 		minWidth: '48%',
// 		textAlign: 'center',
// 	},
// 	selected: {
// 		backgroundColor: 'coral',
// 		borderWidth: 0,
// 	},
// 	buttonLabel: {
// 		fontSize: 12,
// 		fontWeight: '500',
// 		color: 'coral',
// 	},
// 	selectedLabel: {
// 		color: 'white',
// 	},
// 	label: {
// 		textAlign: 'center',
// 		marginBottom: 10,
// 		fontSize: 24,
// 	},
// })
