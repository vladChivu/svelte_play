<script>
    import * as faker from '@faker-js/faker';
    // HOW to bring node modules here and be compiled? ... rollup? 

    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";
    import Avatar from "./Avatar.svelte";
import App from '../../../svelte_Intro/src/App.svelte';

    const users = [];
    for (let i = 0; i<10; i++) {
        users.push({
            "avatar": faker.faker.image.avatar(),
            "person": faker.faker.name.findName(),
            "email": faker.faker.internet.email(),
            "city": faker.faker.address.cityName(),
            "country": faker.faker.address.country(),
            "favouriteQuote": faker.faker.lorem.sentence()
        });
    };
    console.log(users);
    const columnValues = ["avatar","person","email","city","country","favoriteQuote"];
</script>

<table>
    <thead>
        <tr>
            <TableHead columns={columnValues}/>
        </tr>
    </thead>

    <tbody>
        {#each users as user}
            <tr>
                <Avatar picture={user.avatar}/>
                <TableRow person={user.person}, email={user.email}, city={user.city}, country={user.country}, favoriteQuote={user.favouriteQuote}/>
                <!-- <TableRow {...user}/> -->
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
      border: 1px solid;
      border-collapse: collapse;
      margin: 10px;
    }
</style>