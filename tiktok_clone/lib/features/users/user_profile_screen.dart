import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tictokclone/constants/gaps.dart';
import 'package:tictokclone/constants/sizes.dart';
import 'package:tictokclone/features/settings/settings_screen.dart';

class UserProfileScreen extends StatefulWidget {
  const UserProfileScreen({super.key});

  @override
  State<UserProfileScreen> createState() => _UserProfileScreenState();
}

class _UserProfileScreenState extends State<UserProfileScreen> {
  void _onGearPressed() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const SettingsScreen(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return [
            SliverAppBar(
              title: const Text("Profile_FA"),
              actions: [
                IconButton(
                  onPressed: _onGearPressed,
                  icon: const FaIcon(
                    FontAwesomeIcons.gear,
                    size: Sizes.size20,
                  ),
                )
              ],
            ),
            SliverToBoxAdapter(
              child: Column(
                children: [
                  const CircleAvatar(
                    radius: 50,
                    foregroundColor: Colors.amber,
                    foregroundImage: NetworkImage(
                        "https://images.unsplash.com/photo-1682847724222-207d5e8e0b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"),
                  ),
                  Gaps.v20,
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text(
                        "@username",
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                          fontSize: Sizes.size18,
                        ),
                      ),
                      Gaps.h5,
                      FaIcon(
                        FontAwesomeIcons.solidCircleCheck,
                        size: Sizes.size16,
                        color: Colors.blue,
                      ),
                    ],
                  ),
                  Gaps.v12,
                  SizedBox(
                    height: Sizes.size44,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Column(
                          children: [
                            const Text(
                              "97",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: Sizes.size18,
                              ),
                            ),
                            Gaps.v3,
                            Text(
                              "Following",
                              style: TextStyle(
                                color: Colors.grey.shade500,
                              ),
                            ),
                          ],
                        ),
                        VerticalDivider(
                          width: 32,
                          thickness: Sizes.size1,
                          color: Colors.grey.shade400,
                          indent: Sizes.size14,
                          endIndent: Sizes.size14,
                        ),
                        Column(
                          children: [
                            const Text(
                              "10M",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: Sizes.size18,
                              ),
                            ),
                            Gaps.v3,
                            Text(
                              "Followers",
                              style: TextStyle(
                                color: Colors.grey.shade500,
                              ),
                            ),
                          ],
                        ),
                        VerticalDivider(
                          width: 32,
                          thickness: Sizes.size1,
                          color: Colors.grey.shade400,
                          indent: Sizes.size14,
                          endIndent: Sizes.size14,
                        ),
                        Column(
                          children: [
                            const Text(
                              "169.34M",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: Sizes.size18,
                              ),
                            ),
                            Gaps.v3,
                            Text(
                              "Likes",
                              style: TextStyle(
                                color: Colors.grey.shade500,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Gaps.v40,
                  FractionallySizedBox(
                    widthFactor: 0.66,
                    child: Row(
                      children: [
                        Flexible(
                          fit: FlexFit.tight,
                          flex: 4,
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                              vertical: Sizes.size12,
                              horizontal: Sizes.size20,
                            ),
                            decoration: BoxDecoration(
                              color: Theme.of(context).primaryColor,
                              borderRadius: const BorderRadius.all(
                                Radius.circular(
                                  Sizes.size4,
                                ),
                              ),
                            ),
                            child: const Text(
                              "Follow",
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w600,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ),
                        ),
                        Gaps.h3,
                        Flexible(
                          flex: 1,
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                              vertical: Sizes.size9,
                              horizontal: Sizes.size11,
                            ),
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: Colors.grey.shade400,
                              ),
                              borderRadius: const BorderRadius.all(
                                Radius.circular(Sizes.size4),
                              ),
                            ),
                            child: FaIcon(
                              FontAwesomeIcons.youtube,
                              size: Sizes.size20,
                              color: Colors.grey.shade800,
                            ),
                          ),
                        ),
                        Gaps.h3,
                        Flexible(
                          flex: 1,
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                              vertical: Sizes.size9,
                              horizontal: Sizes.size11,
                            ),
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: Colors.grey.shade400,
                              ),
                              borderRadius: const BorderRadius.all(
                                Radius.circular(Sizes.size4),
                              ),
                            ),
                            child: FaIcon(
                              FontAwesomeIcons.caretDown,
                              size: Sizes.size20,
                              color: Colors.grey.shade800,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Gaps.v14,
                  const Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: Sizes.size32,
                    ),
                    child: Text(
                      "All highlight and where to watch livbe matches on FIFA+++",
                      textAlign: TextAlign.center,
                    ),
                  ),
                  Gaps.v14,
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      FaIcon(
                        FontAwesomeIcons.link,
                        size: Sizes.size18,
                      ),
                      Gaps.h4,
                      Text(
                        "http://nomad coders.co.kr ",
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                  Gaps.v20,
                  Container(
                    decoration: BoxDecoration(
                      border: Border.symmetric(
                        horizontal: BorderSide(
                          color: Colors.grey.shade200,
                          width: 0.5,
                        ),
                      ),
                    ),
                    child: const TabBar(
                      labelColor: Colors.black,
                      labelPadding: EdgeInsets.symmetric(
                        vertical: Sizes.size20,
                      ),
                      indicatorColor: Colors.black,
                      indicatorSize: TabBarIndicatorSize.label,
                      tabs: [
                        Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: Sizes.size20,
                          ),
                          child: Icon(
                            Icons.grid_4x4_rounded,
                          ),
                        ),
                        Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: Sizes.size20,
                          ),
                          child: FaIcon(
                            FontAwesomeIcons.heart,
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ];
        },
        body: TabBarView(
          children: [
            GridView.builder(
              keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,

              itemCount: 20,
              padding: EdgeInsets.zero,
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  crossAxisSpacing: Sizes.size2,
                  mainAxisSpacing: Sizes.size2,
                  childAspectRatio: 9 / 16),
              itemBuilder: (context, index) => Column(
                children: [
                  Stack(
                    children: [
                      AspectRatio(
                        aspectRatio: 9 / 16,
                        child: FadeInImage.assetNetwork(
                          fit: BoxFit.cover,
                          placeholder: "lib/assets/images/lotto.png",
                          image:
                              "https://images.unsplash.com/photo-1682348686716-9a71d77e681c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                        ),
                      ),
                      Positioned(
                        bottom: 1,
                        left: 1,
                        child: Row(
                          children: const [
                            FaIcon(
                              FontAwesomeIcons.circlePlay,
                              size: Sizes.size18,
                              color: Colors.white,
                            ),
                            Gaps.h2,
                            Text(
                              "4.1M",
                              style: TextStyle(
                                fontSize: Sizes.size18,
                                fontWeight: FontWeight.w500,
                                color: Colors.white,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              // Image.asset("lib/assets/images/lotto.png"),
            ),
            const Center(
              child: Text("pagestwo "),
            ),
          ],
        ),
      ),
    );
  }
}
